#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as dotenv from 'dotenv';
import 'source-map-support/register';

import CertificatesStack from '@/stacks/CertificatesStack';
import ReceiverAppStack from '@/stacks/ReceiverAppStack';
import { env } from '@/utils/env';
import type { BaseStackProps } from '@/utils/props';

dotenv.config();

const app = new cdk.App();

const baseProps: BaseStackProps = {
    env: { account: env.AWS_ACCOUNT_ID, region: env.AWS_REGION },
    deploymentEnvironment: env.DEPLOYMENT_ENVIRONMENT,
    domainNameBase: `${env.DEPLOYMENT_ENVIRONMENT}.apps.aws.thomas-kiljanczyk.dev`
};

function addDevelopmentStacks() {
    const certificateStack = new CertificatesStack(app, `certificates-development`, baseProps);

    new ReceiverAppStack(app, `receiver-app-development`, {
        ...baseProps,
        certificate: certificateStack.receiverAppCertificate
    });
}

addDevelopmentStacks();
