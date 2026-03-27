// Shared TypeScript Interfaces

export interface IUser {
    _id: string;
    email: string;
    agencyName: string;
    phone?: string;
    role: 'admin' | 'user';
    isActive: boolean;
    timezone: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICustomer {
    _id: string;
    userId: string;
    fullName: string;
    whatsappNumber: string;
    dateOfBirth?: string;
    anniversaryDate?: string;
    passportNumber?: string;
    visaNumber?: string;
    passportExpiry?: string;
    visaExpiry?: string;
    notes?: string;
    isActive: boolean;
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
    createdAt: string;
    updatedAt: string;
}

export interface IDeal {
    _id: string;
    userId: string;
    title: string;
    value: number;
    currency: string;
    stageId: string | any;
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
    customerId: string | any;
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

export interface ITag {
    _id: string;
    userId: string;
    name: string;
    color: string;
    createdAt: string;
    updatedAt: string;
}

export interface IMessageLog {
    _id: string;
    userId: string;
    customerId: string;
    message: string;
    direction: 'inbound' | 'outbound';
    status: 'sent' | 'delivered' | 'read' | 'failed' | 'received';
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
    type: 'send_whatsapp' | 'add_tag' | 'create_reminder';
    config: Record<string, any>; // e.g., { templateId: '123', customMessage: 'Hi' } or { tagId: 'abc' }
}

export interface IWorkflow {
    _id: string;
    userId: string;
    name: string;
    description?: string;
    triggerType: 'customer_created' | 'lead_created' | 'lead_converted' | 'deal_won' | 'tag_added';
    conditions: IWorkflowCondition[];
    actions: IWorkflowAction[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
