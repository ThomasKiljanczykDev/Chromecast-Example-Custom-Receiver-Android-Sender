/*
 * Created by Thomas Kiljanczyk on 24/11/2024, 00:52
 * Copyright (c) 2024 . All rights reserved.
 * Last modified 24/11/2024, 00:52
 */

export class DomainNameConstants {
    public static getReceiverAppDomainName(domain: string): string {
        return `example-receiver-app.${domain}`;
    }
}
