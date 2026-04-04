// Shared TypeScript Interfaces
export const teamRoles = ['admin', 'manager', 'staff', 'viewer'] as const;
export type TeamRole = typeof teamRoles[number];

export interface IWhatsappConfig {
    provider: 'twilio' | 'meta' | 'ultramsg' | null;
    accountSid?: string;
    authToken?: string;
    phoneNumber?: string;
    accessToken?: string;
    phoneNumberId?: string;
    businessAccountId?: string;
    ultramsgInstanceId?: string;
    ultramsgToken?: string;
}

export interface IEmailConfig {
    provider: 'sendgrid' | 'smtp' | 'ses' | 'gmail' | 'gmail_smtp' | null;
    apiKey?: string;
    host?: string;
    port?: number;
    user?: string;
    pass?: string;
    region?: string;
    apiSecret?: string;
    fromEmail?: string;


    fromName?: string;
    accessToken?: string;
    refreshToken?: string;
    expiryDate?: number;
}

export interface ICloudinaryConfig {
    cloudName: string;
    apiKey: string;
    apiSecret: string;
}

export interface IUser {
    _id: string;
    email: string;
    agencyName: string;
    phone: string;
    timezone: string;
    role: TeamRole;
    agencyId?: string;
    expoPushToken?: string;
    whatsappConfig: IWhatsappConfig;
    emailConfig: IEmailConfig;
    subscription: {
        plan: 'free' | 'basic' | 'premium' | 'enterprise';
        status: 'active' | 'inactive' | 'cancelled';
        expiresAt?: string;
    };
    cloudinaryConfig?: ICloudinaryConfig;
    createdAt: string;
    updatedAt: string;
}

export interface ICustomer {
    _id: string;
    userId: string;
    fullName: string;
    whatsappNumber: string;
    email?: string;
    dateOfBirth?: string;
    anniversaryDate?: string;
    passportNumber?: string;
    visaNumber?: string;
    passportExpiry?: string;
    visaExpiry?: string;
    notes?: string;
    tags?: ITag[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ITag {
    _id: string;
    userId: string;
    name: string;
    color: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICustomerActivity {
    _id: string;
    userId: string;
    customerId: string;
    type: 'note' | 'call' | 'email' | 'message' | 'reminder' | 'status_change';
    content: string;
    metadata?: Record<string, string | number | boolean | undefined>;
    createdBy?: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICustomerGroup {
    _id: string;
    userId: string;
    name: string;
    type: 'static' | 'dynamic';
    customerIds: string[];
    filters?: {
        tagIds?: string[];
        passportExpiryWithin?: number;
        visaExpiryWithin?: number;
        hasAnniversaryWithin?: number;
        isBirthdayWithin?: number;
    };
    createdAt: string;
    updatedAt: string;
}

export interface ILead {
    _id: string;
    userId: string;
    fullName: string;
    whatsappNumber: string;
    email?: string;
    status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
    source?: string;
    notes?: string;
    convertedAt?: string;
    createdAt: string;
    updatedAt: string;
}

export interface IDeal {
    _id: string;
    userId: string;
    title: string;
    value: number;
    currency: string;
    stageId: string;
    leadId?: string;
    customerId?: string;
    expectedCloseDate?: string;
    notes?: string;
    status: 'open' | 'won' | 'lost';
    createdAt: string;
    updatedAt: string;
}

export interface IPipelineStage {
    _id: string;
    userId: string;
    name: string;
    color: string;
    order: number;
    createdAt: string;
    updatedAt: string;
}

export interface IReminder {
    _id: string;
    userId: string;
    customerId: string;
    type: 'birthday' | 'anniversary' | 'passport_expiry' | 'visa_expiry' | 'trip' | 'custom';
    title: string;
    triggerDate: string;
    daysBefore: number;
    status: 'scheduled' | 'sent' | 'failed' | 'cancelled';
    templateId?: string;
    customMessage?: string;
    recurrence: 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';
    notificationChannels: string[];
    createdAt: string;
    updatedAt: string;
}

export interface IMessageLog {
    _id: string;
    userId: string;
    customerId: string;
    phoneNumber: string;
    message: string;
    direction: 'inbound' | 'outbound';
    status: 'pending' | 'sent' | 'delivered' | 'read' | 'failed' | 'received';
    provider: 'meta' | 'ultramsg';
    messageId?: string;
    timestamp: string;
}

export interface IWorkflowCondition {
    field: string;
    operator: 'equals' | 'not_equals' | 'contains' | 'greater_than' | 'less_than';
    value: string | number | boolean;
}

export interface IWorkflowAction {
    id?: string;
    type: 'send_whatsapp' | 'send_email' | 'add_tag' | 'create_reminder' | 'wait' | 'condition' | 'smart_reply';
    config: Record<string, string | number | boolean | undefined>;
    nextId?: string;
    trueId?: string;
    falseId?: string;
}

export interface IWorkflow {
    _id: string;
    userId: string;
    name: string;
    description?: string;
    triggerType: 'customer_created' | 'lead_created' | 'lead_converted' | 'deal_won' | 'tag_added' | 'manual';
    conditions: IWorkflowCondition[];
    actions: IWorkflowAction[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface IEmailTemplate {
    _id: string;
    userId: string;
    name: string;
    subject: string;
    content: string;
    type: 'birthday' | 'anniversary' | 'passport_expiry' | 'visa_expiry' | 'trip' | 'custom';
    isDefault: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface INotificationPreference {
    _id: string;
    userId: string;
    reminderType: string;
    channels: ('whatsapp' | 'email' | 'in_app')[];
    quietHoursStart?: string;
    quietHoursEnd?: string;
}

export interface IWebhookSubscription {
    _id: string;
    userId: string;
    targetUrl: string;
    events: string[];
    isActive: boolean;
    secretKey?: string;
    createdAt: string;
    updatedAt: string;
}
export interface IBroadcast {
    _id: string;
    userId: string;
    title: string;
    message?: string;
    mediaUrl?: string;
    mediaType?: 'image' | 'video' | 'document';
    templateName?: string;
    languageCode?: string;
    totalRecipients: number;
    sentCount: number;
    failedCount: number;
    status: 'draft' | 'sending' | 'completed' | 'failed';
    scheduledAt?: string;
    startedAt?: string;
    completedAt?: string;
    createdAt: string;
    updatedAt: string;
}

export interface ISavedReport {
    _id: string;
    userId: string;
    name: string;
    description?: string;
    entityType: 'customers' | 'leads' | 'deals';
    metrics: string[];
    filters: {
        field: string;
        operator: 'equals' | 'contains' | 'greater_than' | 'less_than' | 'not_equals';
        value: any;
    }[];
    groupBy?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    createdAt: string;
    updatedAt: string;
}

export interface ITeamMember {
    _id: string;
    userId: string;
    email: string;
    name: string;
    role: 'admin' | 'manager' | 'agent';
    permissions: string[];
    isActive: boolean;
    lastLoginAt?: string;
    createdAt: string;
    updatedAt: string;
}

export interface ITeamInvite {
    _id: string;
    email: string;
    agencyId: string;
    invitedBy: string;
    role: 'admin' | 'manager' | 'staff' | 'viewer';
    token: string;
    expiresAt: string;
    status: 'pending' | 'accepted' | 'expired';
    createdAt: string;
    updatedAt: string;
}
