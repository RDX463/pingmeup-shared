"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealQuerySchema = exports.updateDealSchema = exports.createDealSchema = exports.updatePipelineStageSchema = exports.createPipelineStageSchema = exports.leadQuerySchema = exports.updateLeadSchema = exports.createLeadSchema = exports.leadStatuses = exports.groupQuerySchema = exports.updateGroupSchema = exports.createGroupSchema = exports.groupTypes = exports.sendMessageSchema = exports.uploadSchema = exports.updateProfileSchema = exports.cloudinaryConfigSchema = exports.testMessageSchema = exports.whatsappConfigSchema = exports.loginSchema = exports.registerSchema = exports.teamQuerySchema = exports.updateTeamMemberSchema = exports.inviteTeamMemberSchema = exports.teamRoles = exports.activityQuerySchema = exports.createActivitySchema = exports.activityTypes = exports.assignTagSchema = exports.tagQuerySchema = exports.updateTagSchema = exports.createTagSchema = exports.templateQuerySchema = exports.updateTemplateSchema = exports.createTemplateSchema = exports.templateTypes = exports.broadcastQuerySchema = exports.createBroadcastSchema = exports.reminderQuerySchema = exports.updateReminderSchema = exports.createReminderSchema = exports.reminderTypes = exports.customerQuerySchema = exports.updateCustomerSchema = exports.createCustomerSchema = void 0;
const zod_1 = require("zod");
// Customer validation schemas
exports.createCustomerSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(1, 'Full name is required').max(100),
    whatsappNumber: zod_1.z.string().min(1, 'WhatsApp number is required').max(20),
    dateOfBirth: zod_1.z.string().datetime().optional().nullable(),
    anniversaryDate: zod_1.z.string().datetime().optional().nullable(),
    passportNumber: zod_1.z.string().max(50).optional(),
    visaNumber: zod_1.z.string().max(50).optional(),
    passportExpiry: zod_1.z.string().datetime().optional().nullable(),
    visaExpiry: zod_1.z.string().datetime().optional().nullable(),
    notes: zod_1.z.string().max(1000).optional(),
    isActive: zod_1.z.boolean().optional().default(true),
});
exports.updateCustomerSchema = exports.createCustomerSchema.partial();
exports.customerQuerySchema = zod_1.z.object({
    search: zod_1.z.string().optional(),
    tagId: zod_1.z.string().optional(),
    page: zod_1.z.coerce.number().int().positive().optional().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).optional().default(20),
});
// Reminder validation schemas
exports.reminderTypes = ['birthday', 'anniversary', 'passport_expiry', 'visa_expiry', 'trip', 'custom'];
exports.createReminderSchema = zod_1.z.object({
    customerId: zod_1.z.string().min(1, 'Customer ID is required'),
    type: zod_1.z.enum(exports.reminderTypes),
    title: zod_1.z.string().min(1, 'Title is required').max(200),
    triggerDate: zod_1.z.string().min(1, 'Valid trigger date is required'),
    daysBefore: zod_1.z.number().int().min(0).max(365).optional().default(0),
    templateId: zod_1.z.string().optional(),
    customMessage: zod_1.z.string().max(2000).optional(),
    recurrence: zod_1.z.enum(['none', 'daily', 'weekly', 'monthly', 'yearly']).optional().default('none'),
    notificationChannels: zod_1.z.array(zod_1.z.string()).optional().default(['whatsapp']),
});
exports.updateReminderSchema = exports.createReminderSchema.partial();
exports.reminderQuerySchema = zod_1.z.object({
    status: zod_1.z.enum(['scheduled', 'sent', 'failed', 'cancelled']).optional(),
    type: zod_1.z.enum(exports.reminderTypes).optional(),
    days: zod_1.z.coerce.number().int().positive().optional(),
    page: zod_1.z.coerce.number().int().positive().optional().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).optional().default(20),
});
// Broadcast validation schemas
exports.createBroadcastSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).max(200).optional(),
    message: zod_1.z.string().max(4096).optional(),
    mediaUrl: zod_1.z.string().url().optional(),
    mediaType: zod_1.z.string().optional(),
    customerIds: zod_1.z.array(zod_1.z.string()).optional(),
    groupId: zod_1.z.string().optional(),
    sendNow: zod_1.z.boolean().optional().default(true),
    templateName: zod_1.z.string().optional(),
    languageCode: zod_1.z.string().optional().default('en_US'),
    templateComponents: zod_1.z.array(zod_1.z.any()).optional(),
});
exports.broadcastQuerySchema = zod_1.z.object({
    status: zod_1.z.enum(['draft', 'sending', 'completed', 'failed']).optional(),
    page: zod_1.z.coerce.number().int().positive().optional().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).optional().default(10),
});
// Template validation schemas
exports.templateTypes = ['birthday', 'anniversary', 'passport_expiry', 'visa_expiry', 'trip', 'custom'];
exports.createTemplateSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Template name is required').max(100),
    type: zod_1.z.enum(exports.templateTypes),
    content: zod_1.z.string().min(1, 'Content is required').max(4096),
    isDefault: zod_1.z.boolean().optional().default(false),
});
exports.updateTemplateSchema = exports.createTemplateSchema.partial();
exports.templateQuerySchema = zod_1.z.object({
    type: zod_1.z.enum(exports.templateTypes).optional(),
    page: zod_1.z.coerce.number().int().positive().optional().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).optional().default(50),
});
// Tag validation schemas
exports.createTagSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Tag name is required').max(50),
    color: zod_1.z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Must be a valid hex color').optional().default('#6366f1'),
});
exports.updateTagSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(50).optional(),
    color: zod_1.z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional(),
});
exports.tagQuerySchema = zod_1.z.object({
    search: zod_1.z.string().optional(),
    page: zod_1.z.coerce.number().int().positive().optional().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).optional().default(50),
});
exports.assignTagSchema = zod_1.z.object({
    tagId: zod_1.z.string().min(1, 'Tag ID is required'),
});
// Activity validation schemas
exports.activityTypes = ['note', 'call', 'email', 'message', 'reminder', 'status_change'];
exports.createActivitySchema = zod_1.z.object({
    customerId: zod_1.z.string().min(1, 'Customer ID is required'),
    type: zod_1.z.enum(exports.activityTypes),
    content: zod_1.z.string().min(1, 'Content is required').max(2000),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
});
exports.activityQuerySchema = zod_1.z.object({
    customerId: zod_1.z.string().optional(),
    type: zod_1.z.enum(exports.activityTypes).optional(),
    page: zod_1.z.coerce.number().int().positive().optional().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).optional().default(20),
});
// Team member validation schemas
exports.teamRoles = ['admin', 'manager', 'agent'];
exports.inviteTeamMemberSchema = zod_1.z.object({
    email: zod_1.z.string().email('Valid email is required'),
    name: zod_1.z.string().min(1, 'Name is required').max(100),
    role: zod_1.z.enum(exports.teamRoles),
    permissions: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.updateTeamMemberSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100).optional(),
    role: zod_1.z.enum(exports.teamRoles).optional(),
    permissions: zod_1.z.array(zod_1.z.string()).optional(),
    isActive: zod_1.z.boolean().optional(),
});
exports.teamQuerySchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().optional().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).optional().default(20),
});
// Auth validation schemas
exports.registerSchema = zod_1.z.object({
    email: zod_1.z.string().email('Valid email is required'),
    password: zod_1.z.string().min(8, 'Password must be at least 8 characters'),
    agencyName: zod_1.z.string().min(1, 'Agency name is required').max(200),
    phone: zod_1.z.string().max(20).optional(),
    timezone: zod_1.z.string().optional().default('Asia/Kolkata'),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Valid email is required'),
    password: zod_1.z.string().min(1, 'Password is required'),
});
// WhatsApp validation schemas
exports.whatsappConfigSchema = zod_1.z.discriminatedUnion('provider', [
    zod_1.z.object({
        provider: zod_1.z.literal('meta'),
        accessToken: zod_1.z.string().min(1, 'Access Token is required'),
        phoneNumberId: zod_1.z.string().min(1, 'Phone Number ID is required'),
        businessAccountId: zod_1.z.string().optional().nullable(),
    }),
    zod_1.z.object({
        provider: zod_1.z.literal('ultramsg'),
        ultramsgInstanceId: zod_1.z.string().min(1, 'Instance ID is required'),
        ultramsgToken: zod_1.z.string().min(1, 'Token is required'),
    }),
]);
exports.testMessageSchema = zod_1.z.object({
    phoneNumber: zod_1.z.string().min(1, 'Phone number is required'),
    message: zod_1.z.string().optional(),
});
// Cloudinary validation schemas
exports.cloudinaryConfigSchema = zod_1.z.object({
    cloudName: zod_1.z.string().min(1, 'Cloud Name is required'),
    apiKey: zod_1.z.string().min(1, 'API Key is required'),
    apiSecret: zod_1.z.string().min(1, 'API Secret is required'),
});
// Profile validation schemas
exports.updateProfileSchema = zod_1.z.object({
    agencyName: zod_1.z.string().min(1).max(200).optional(),
    phone: zod_1.z.string().max(20).optional(),
    timezone: zod_1.z.string().optional(),
});
// Upload validation schemas
exports.uploadSchema = zod_1.z.object({
    base64: zod_1.z.string().min(1, 'Base64 string is required'),
    fileName: zod_1.z.string().optional().default(`media_${Date.now()}`),
    folder: zod_1.z.string().optional().default('broadcasts'),
});
// Inbox validation schemas
exports.sendMessageSchema = zod_1.z.object({
    message: zod_1.z.string().min(1, 'Message is required').max(2000, 'Message is too long'),
});
// Customer Group validation schemas
exports.groupTypes = ['static', 'dynamic'];
exports.createGroupSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Group name is required').max(100),
    type: zod_1.z.enum(exports.groupTypes),
    customerIds: zod_1.z.array(zod_1.z.string()).optional().default([]),
    filters: zod_1.z.object({
        tagIds: zod_1.z.array(zod_1.z.string()).optional(),
        passportExpiryWithin: zod_1.z.number().int().min(1).max(365).optional(),
        visaExpiryWithin: zod_1.z.number().int().min(1).max(365).optional(),
        hasAnniversaryWithin: zod_1.z.number().int().min(1).max(365).optional(),
        isBirthdayWithin: zod_1.z.number().int().min(1).max(365).optional(),
    }).optional(),
});
exports.updateGroupSchema = exports.createGroupSchema.partial();
exports.groupQuerySchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().optional().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).optional().default(20),
});
// Lead validation schemas
exports.leadStatuses = ['new', 'contacted', 'qualified', 'converted', 'lost'];
exports.createLeadSchema = zod_1.z.object({
    fullName: zod_1.z.string().min(1, 'Full name is required').max(100),
    whatsappNumber: zod_1.z.string().min(1, 'WhatsApp number is required').max(20),
    email: zod_1.z.string().email().or(zod_1.z.literal('')).optional().nullable(),
    status: zod_1.z.enum(exports.leadStatuses).optional().default('new'),
    source: zod_1.z.string().max(100).optional().or(zod_1.z.literal('')),
    notes: zod_1.z.string().max(1000).optional().or(zod_1.z.literal('')),
});
exports.updateLeadSchema = exports.createLeadSchema.partial();
exports.leadQuerySchema = zod_1.z.object({
    status: zod_1.z.enum(exports.leadStatuses).optional(),
    search: zod_1.z.string().optional(),
    page: zod_1.z.coerce.number().int().positive().optional().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).optional().default(20),
});
// Pipeline Stage validation schemas
exports.createPipelineStageSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Stage name is required').max(100),
    color: zod_1.z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Must be a valid hex color').optional().default('#6366f1'),
    order: zod_1.z.number().int().min(0).optional().default(0),
});
exports.updatePipelineStageSchema = exports.createPipelineStageSchema.partial();
// Deal validation schemas
exports.createDealSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required').max(200),
    value: zod_1.z.number().min(0, 'Value must be positive'),
    currency: zod_1.z.string().max(10).optional().default('INR'),
    stageId: zod_1.z.string().min(1, 'Stage ID is required'),
    leadId: zod_1.z.string().or(zod_1.z.literal('')).optional().nullable(),
    customerId: zod_1.z.string().or(zod_1.z.literal('')).optional().nullable(),
    expectedCloseDate: zod_1.z.string().or(zod_1.z.literal('')).optional().nullable(),
    notes: zod_1.z.string().max(2000).optional().or(zod_1.z.literal('')),
});
exports.updateDealSchema = exports.createDealSchema.partial();
exports.dealQuerySchema = zod_1.z.object({
    stageId: zod_1.z.string().optional(),
    page: zod_1.z.coerce.number().int().positive().optional().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).optional().default(20),
});
