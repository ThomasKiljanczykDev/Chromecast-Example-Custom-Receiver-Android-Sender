/*
 * Created by Thomas Kiljanczyk on 23/11/2024, 22:08
 * Copyright (c) 2024 . All rights reserved.
 * Last modified 23/11/2024, 22:08
 */
import type { StackProps } from 'aws-cdk-lib';

import type { DeploymentEnvironment } from '@/utils/env';

export interface BaseStackProps extends StackProps {
    readonly deploymentEnvironment: DeploymentEnvironment;
    readonly domainNameBase: string;
}
