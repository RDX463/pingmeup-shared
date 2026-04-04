import { z } from 'zod';

// Customer validation schemas
export const createCustomerSchema = z.object({
    fullName: z.string().min(1, 'Full name is required').max(100),
    whatsappNumber: z.string().min(1, 'WhatsApp number is required').max(20),
    email: z.string().email('Valid email is required').optional().or(z.literal('')),
    dateOfBirth: z.string().datetime().optional().nullable(),
    anniversaryDate: z.string().datetime().optional().nullable(),
    passportNumber: z.string().max(50).optional(),
    visaNumber: z.string().max(50).optional(),
    passportExpiry: z.string().optional().nullable(),
    visaExpiry: z.string().optional().nullable(),
    notes: z.string().max(1000).optional(),
    isActive: z.boolean().default(true),
    tagIds: z.array(z.string()).optional(),
});

export const updateCustomerSchema = createCustomerSchema.partial();

export const customerQuerySchema = z.object({
    search: z.string().optional(),
    tagId: z.string().optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(1000).optional().default(20),
});

// Reminder validation schemas
export const reminderTypes = ['birthday', 'anniversary', 'passport_expiry', 'visa_expiry', 'trip', 'custom'] as const;

export const createReminderSchema = z.object({
    customerId: z.string().min(1, 'Customer ID is required'),
    type: z.enum(reminderTypes),
    title: z.string().min(1, 'Title is required').max(200),
    triggerDate: z.string().min(1, 'Valid trigger date is required'),
    daysBefore: z.number().int().min(0).max(365).optional().default(0),
    templateId: z.string().optional(),
    customMessage: z.string().max(2000).optional(),
    recurrence: z.enum(['none', 'daily', 'weekly', 'monthly', 'yearly']).optional().default('none'),
    notificationChannels: z.array(z.string()).optional().default(['whatsapp']),
});

export const updateReminderSchema = createReminderSchema.partial();

export const reminderQuerySchema = z.object({
    status: z.enum(['scheduled', 'sent', 'failed', 'cancelled']).optional(),
    type: z.enum(reminderTypes).optional(),
    days: z.coerce.number().int().positive().optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(100).optional().default(20),
});

// Broadcast validation schemas
export const createBroadcastSchema = z.object({
    title: z.string().min(1).max(200).optional(),
    message: z.string().max(4096).optional(),
    mediaUrl: z.string().url().optional(),
    mediaType: z.string().optional(),
    customerIds: z.array(z.string()).optional(),
    groupId: z.string().optional(),
    sendNow: z.boolean().optional().default(true),
    templateName: z.string().optional(),
    languageCode: z.string().optional().default('en_US'),
    templateComponents: z.array(z.any()).optional(),
});

export const broadcastQuerySchema = z.object({
    status: z.enum(['draft', 'sending', 'completed', 'failed']).optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(100).optional().default(10),
});

// Template validation schemas
export const templateTypes = ['birthday', 'anniversary', 'passport_expiry', 'visa_expiry', 'trip', 'custom'] as const;

export const createTemplateSchema = z.object({
    name: z.string().min(1, 'Template name is required').max(100),
    type: z.enum(templateTypes),
    content: z.string().min(1, 'Content is required').max(4096),
    isDefault: z.boolean().optional().default(false),
});

export const updateTemplateSchema = createTemplateSchema.partial();

export const templateQuerySchema = z.object({
    type: z.enum(templateTypes).optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(100).optional().default(50),
});

// Tag validation schemas
export const createTagSchema = z.object({
    name: z.string().min(1, 'Tag name is required').max(50),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Must be a valid hex color').optional().default('#6366f1'),
});

export const updateTagSchema = z.object({
    name: z.string().min(1).max(50).optional(),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional(),
});

export const tagQuerySchema = z.object({
    search: z.string().optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(100).optional().default(50),
});

export const assignTagSchema = z.object({
    tagId: z.string().min(1, 'Tag ID is required'),
});

// Activity validation schemas
export const activityTypes = ['note', 'call', 'email', 'message', 'reminder', 'status_change'] as const;

export const createActivitySchema = z.object({
    customerId: z.string().min(1, 'Customer ID is required'),
    type: z.enum(activityTypes),
    content: z.string().min(1, 'Content is required').max(2000),
    metadata: z.record(z.string(), z.any()).optional(),
});

export const activityQuerySchema = z.object({
    customerId: z.string().optional(),
    type: z.enum(activityTypes).optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(100).optional().default(20),
});

// Team member validation schemas
export const teamRoles = ['admin', 'manager', 'staff', 'viewer'] as const;

export const inviteTeamMemberSchema = z.object({
    email: z.string().email('Valid email is required'),
    name: z.string().min(1, 'Name is required').max(100),
    role: z.enum(teamRoles),
    permissions: z.array(z.string()).optional(),
});

export const updateTeamMemberSchema = z.object({
    name: z.string().min(1).max(100).optional(),
    role: z.enum(teamRoles).optional(),
    permissions: z.array(z.string()).optional(),
    isActive: z.boolean().optional(),
});

export const teamQuerySchema = z.object({
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(100).optional().default(20),
});

// Auth validation schemas
export const registerSchema = z.object({
    email: z.string().email('Valid email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    agencyName: z.string().min(1, 'Agency name is required').max(200),
    phone: z.string().max(20).optional(),
    timezone: z.string().optional().default('Asia/Kolkata'),
});

export const loginSchema = z.object({
    email: z.string().email('Valid email is required'),
    password: z.string().min(1, 'Password is required'),
});

// WhatsApp validation schemas
export const whatsappConfigSchema = z.discriminatedUnion('provider', [
    z.object({
        provider: z.literal('meta'),
        accessToken: z.string().min(1, 'Access Token is required'),
        phoneNumberId: z.string().min(1, 'Phone Number ID is required'),
        businessAccountId: z.string().optional().nullable(),
    }),
    z.object({
        provider: z.literal('ultramsg'),
        ultramsgInstanceId: z.string().min(1, 'Instance ID is required'),
        ultramsgToken: z.string().min(1, 'Token is required'),
    }),
]);

export const testMessageSchema = z.object({
    phoneNumber: z.string().min(1, 'Phone number is required'),
    message: z.string().optional(),
});

// Cloudinary validation schemas
export const cloudinaryConfigSchema = z.object({
    cloudName: z.string().min(1, 'Cloud Name is required'),
    apiKey: z.string().min(1, 'API Key is required'),
    apiSecret: z.string().min(1, 'API Secret is required'),
});

// Profile validation schemas
export const updateProfileSchema = z.object({
    agencyName: z.string().min(1).max(200).optional(),
    phone: z.string().max(20).optional(),
    timezone: z.string().optional(),
});

// Upload validation schemas
export const uploadSchema = z.object({
    base64: z.string().min(1, 'Base64 string is required'),
    fileName: z.string().optional().default(`media_${Date.now()}`),
    folder: z.string().optional().default('broadcasts'),
});

// Inbox validation schemas
export const sendMessageSchema = z.object({
    message: z.string().min(1, 'Message is required').max(2000, 'Message is too long'),
});

// Customer Group validation schemas
export const groupTypes = ['static', 'dynamic'] as const;

export const createGroupSchema = z.object({
    name: z.string().min(1, 'Group name is required').max(100),
    type: z.enum(groupTypes),
    customerIds: z.array(z.string()).optional().default([]),
    filters: z.object({
        tagIds: z.array(z.string()).optional(),
        passportExpiryWithin: z.number().int().min(1).max(365).optional(),
        visaExpiryWithin: z.number().int().min(1).max(365).optional(),
        hasAnniversaryWithin: z.number().int().min(1).max(365).optional(),
        isBirthdayWithin: z.number().int().min(1).max(365).optional(),
    }).optional(),
});

export const updateGroupSchema = createGroupSchema.partial();

export const groupQuerySchema = z.object({
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(100).optional().default(20),
});

// Lead validation schemas
export const leadStatuses = ['new', 'contacted', 'qualified', 'converted', 'lost'] as const;

export const createLeadSchema = z.object({
    fullName: z.string().min(1, 'Full name is required').max(100),
    whatsappNumber: z.string().min(1, 'WhatsApp number is required').max(20),
    email: z.string().email().or(z.literal('')).optional().nullable(),
    status: z.enum(leadStatuses).optional().default('new'),
    source: z.string().max(100).optional().or(z.literal('')),
    notes: z.string().max(1000).optional().or(z.literal('')),
});

export const updateLeadSchema = createLeadSchema.partial();

export const leadQuerySchema = z.object({
    status: z.enum(leadStatuses).optional(),
    search: z.string().optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(100).optional().default(20),
});

// Pipeline Stage validation schemas
export const createPipelineStageSchema = z.object({
    name: z.string().min(1, 'Stage name is required').max(100),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Must be a valid hex color').optional().default('#6366f1'),
    order: z.number().int().min(0).optional().default(0),
});

export const updatePipelineStageSchema = createPipelineStageSchema.partial();

// Deal validation schemas
export const createDealSchema = z.object({
    title: z.string().min(1, 'Title is required').max(200),
    value: z.number().min(0, 'Value must be positive'),
    currency: z.string().max(10).optional().default('INR'),
    stageId: z.string().min(1, 'Stage ID is required'),
    leadId: z.string().or(z.literal('')).optional().nullable(),
    customerId: z.string().or(z.literal('')).optional().nullable(),
    expectedCloseDate: z.string().or(z.literal('')).optional().nullable(),
    notes: z.string().max(2000).optional().or(z.literal('')),
});

export const updateDealSchema = createDealSchema.partial();

export const dealQuerySchema = z.object({
    stageId: z.string().optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(100).optional().default(20),
});

// Workflow validation schemas
export const workflowTriggerTypes = ['customer_created', 'lead_created', 'lead_converted', 'deal_won', 'tag_added', 'manual'] as const;
export const workflowActionTypes = ['send_whatsapp', 'send_email', 'add_tag', 'create_reminder'] as const;

export const createWorkflowSchema = z.object({
    name: z.string().min(1, 'Name is required').max(150),
    description: z.string().max(1000).optional(),
    triggerType: z.enum(workflowTriggerTypes),
    conditions: z.array(z.object({
        field: z.string().min(1),
        operator: z.enum(['equals', 'not_equals', 'contains', 'greater_than', 'less_than']),
        value: z.union([z.string(), z.number(), z.boolean()]),
    })).optional().default([]),
    actions: z.array(z.object({
        type: z.enum(workflowActionTypes),
        config: z.record(z.string(), z.any()),
    })).min(1, 'At least one action is required'),
    isActive: z.boolean().optional().default(true),
});

export const updateWorkflowSchema = createWorkflowSchema.partial();

export const workflowQuerySchema = z.object({
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(100).optional().default(20),
    isActive: z.boolean().optional(),
});

// Email validation schemas
export const emailConfigSchema = z.discriminatedUnion('provider', [
    z.object({
        provider: z.literal('sendgrid'),
        apiKey: z.string().min(1, 'API Key is required'),
        fromEmail: z.string().email('Valid from email is required'),
        fromName: z.string().optional(),
    }),
    z.object({
        provider: z.literal('smtp'),
        host: z.string().min(1, 'Host is required'),
        port: z.coerce.number().int().positive(),
        user: z.string().min(1, 'User is required'),
        pass: z.string().min(1, 'Password is required'),
        fromEmail: z.string().email('Valid from email is required'),
        fromName: z.string().optional(),
    }),
    z.object({
        provider: z.literal('ses'),
        apiKey: z.string().min(1, 'Access Key ID is required'),
        apiSecret: z.string().min(1, 'Secret Access Key is required'),
        region: z.string().optional().default('us-east-1'),
        fromEmail: z.string().email('Valid from email is required'),
    }),
    z.object({
        provider: z.literal('gmail'),
        fromEmail: z.string().email('Valid from email is required').optional(),
        fromName: z.string().optional(),
    }),
    z.object({
        provider: z.literal('gmail_smtp'),
        fromEmail: z.string().email('Valid from email is required'),
        pass: z.string().min(1, 'App Password is required'),
        user: z.string().optional(),
        fromName: z.string().optional(),
    }),
    z.object({
        provider: z.literal(null),
    })
]);

export const createEmailTemplateSchema = z.object({
    name: z.string().min(1, 'Template name is required').max(100),
    subject: z.string().min(1, 'Subject is required').max(200),
    type: z.enum(templateTypes),
    content: z.string().min(1, 'Content is required'),
    isDefault: z.boolean().optional().default(false),
});

export const updateEmailTemplateSchema = createEmailTemplateSchema.partial();

export const emailTemplateQuerySchema = z.object({
    type: z.enum(templateTypes).optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().max(100).optional().default(50),
});

// Webhook validation schemas
export const createWebhookSchema = z.object({
    targetUrl: z.string().url('A valid URL is required'),
    events: z.array(z.string()).min(1, 'Select at least one event'),
    isActive: z.boolean().optional().default(true),
    secretKey: z.string().max(100).optional(),
});

export const updateWebhookSchema = createWebhookSchema.partial();
