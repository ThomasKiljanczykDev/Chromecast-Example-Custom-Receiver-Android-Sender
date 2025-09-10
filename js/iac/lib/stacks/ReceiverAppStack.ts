import * as cdk from 'aws-cdk-lib';
import {
    aws_cloudfront as cloudFront,
    aws_certificatemanager as cm,
    aws_route53 as route53
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { CloudFrontToS3 } from '@aws-solutions-constructs/aws-cloudfront-s3';

import { DomainNameConstants } from '@/utils/constants';
import type { BaseStackProps } from '@/utils/props';

export interface ReceiverAppStackProps extends BaseStackProps {
    readonly certificate: cm.Certificate;
}

export default class ReceiverAppStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: ReceiverAppStackProps) {
        super(scope, id, props);

        const hostedZone = route53.HostedZone.fromLookup(this, 'hosted-zone', {
            domainName: props.domainNameBase
        });

        const viewerRequestFunction = new cloudFront.Function(this, 'viewer-request-function', {
            code: cloudFront.FunctionCode.fromFile({
                filePath: 'lib/cloudfront-functions/viewer-redirect.js'
            }),
            runtime: cloudFront.FunctionRuntime.JS_2_0
        });

        const viewerResponseFunction = new cloudFront.Function(this, 'viewer-response-function', {
            code: cloudFront.FunctionCode.fromFile({
                filePath: 'lib/cloudfront-functions/viewer-security-headers.js'
            }),
            runtime: cloudFront.FunctionRuntime.JS_2_0
        });

        const cloudFrontS3 = new CloudFrontToS3(this, 'cloudfront-s3', {
            bucketProps: {
                bucketName: `example-custom-receiver-app-${props.deploymentEnvironment}`
            },
            cloudFrontDistributionProps: {
                comment: `example-custom-receiver-app-${props.deploymentEnvironment}`,
                priceClass: cloudFront.PriceClass.PRICE_CLASS_100,
                httpVersion: cloudFront.HttpVersion.HTTP2_AND_3,
                domainNames: [DomainNameConstants.getReceiverAppDomainName(props.domainNameBase)],
                certificate: props.certificate,
                defaultRootObject: 'index.html',
                viewerRequestFunction: {
                    function: viewerRequestFunction,
                    eventType: cloudFront.FunctionEventType.VIEWER_REQUEST
                },
                viewerResponseFunction: {
                    function: viewerResponseFunction,
                    eventType: cloudFront.FunctionEventType.VIEWER_RESPONSE
                }
            },
            logS3AccessLogs: false,
            logCloudFrontAccessLog: false
        });

        new route53.CnameRecord(this, 'receiver-app-cname-record', {
            zone: hostedZone,
            recordName: DomainNameConstants.getReceiverAppDomainName(props.domainNameBase),
            domainName: cloudFrontS3.cloudFrontWebDistribution.distributionDomainName
        });
    }
}
