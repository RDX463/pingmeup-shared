import { z } from 'zod';
export declare const createCustomerSchema: z.ZodObject<{
    fullName: z.ZodString;
    whatsappNumber: z.ZodString;
    email: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    dateOfBirth: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    anniversaryDate: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    passportNumber: z.ZodOptional<z.ZodString>;
    visaNumber: z.ZodOptional<z.ZodString>;
    passportExpiry: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    visaExpiry: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    notes: z.ZodOptional<z.ZodString>;
    isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const updateCustomerSchema: z.ZodObject<{
    fullName: z.ZodOptional<z.ZodString>;
    whatsappNumber: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    dateOfBirth: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    anniversaryDate: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    passportNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    visaNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    passportExpiry: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    visaExpiry: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
}, z.core.$strip>;
export declare const customerQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    tagId: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const reminderTypes: readonly ["birthday", "anniversary", "passport_expiry", "visa_expiry", "trip", "custom"];
export declare const createReminderSchema: z.ZodObject<{
    customerId: z.ZodString;
    type: z.ZodEnum<{
        birthday: "birthday";
        anniversary: "anniversary";
        passport_expiry: "passport_expiry";
        visa_expiry: "visa_expiry";
        trip: "trip";
        custom: "custom";
    }>;
    title: z.ZodString;
    triggerDate: z.ZodString;
    daysBefore: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    templateId: z.ZodOptional<z.ZodString>;
    customMessage: z.ZodOptional<z.ZodString>;
    recurrence: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        none: "none";
        daily: "daily";
        weekly: "weekly";
        monthly: "monthly";
        yearly: "yearly";
    }>>>;
    notificationChannels: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
export declare const updateReminderSchema: z.ZodObject<{
    customerId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        birthday: "birthday";
        anniversary: "anniversary";
        passport_expiry: "passport_expiry";
        visa_expiry: "visa_expiry";
        trip: "trip";
        custom: "custom";
    }>>;
    title: z.ZodOptional<z.ZodString>;
    triggerDate: z.ZodOptional<z.ZodString>;
    daysBefore: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodNumber>>>;
    templateId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    customMessage: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    recurrence: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        none: "none";
        daily: "daily";
        weekly: "weekly";
        monthly: "monthly";
        yearly: "yearly";
    }>>>>;
    notificationChannels: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
}, z.core.$strip>;
export declare const reminderQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        cancelled: "cancelled";
        scheduled: "scheduled";
        sent: "sent";
        failed: "failed";
    }>>;
    type: z.ZodOptional<z.ZodEnum<{
        birthday: "birthday";
        anniversary: "anniversary";
        passport_expiry: "passport_expiry";
        visa_expiry: "visa_expiry";
        trip: "trip";
        custom: "custom";
    }>>;
    days: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const createBroadcastSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    mediaUrl: z.ZodOptional<z.ZodString>;
    mediaType: z.ZodOptional<z.ZodString>;
    customerIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    groupId: z.ZodOptional<z.ZodString>;
    sendNow: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    templateName: z.ZodOptional<z.ZodString>;
    languageCode: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    templateComponents: z.ZodOptional<z.ZodArray<z.ZodAny>>;
}, z.core.$strip>;
export declare const broadcastQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        failed: "failed";
        draft: "draft";
        sending: "sending";
        completed: "completed";
    }>>;
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const templateTypes: readonly ["birthday", "anniversary", "passport_expiry", "visa_expiry", "trip", "custom"];
export declare const createTemplateSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodEnum<{
        birthday: "birthday";
        anniversary: "anniversary";
        passport_expiry: "passport_expiry";
        visa_expiry: "visa_expiry";
        trip: "trip";
        custom: "custom";
    }>;
    content: z.ZodString;
    isDefault: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const updateTemplateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        birthday: "birthday";
        anniversary: "anniversary";
        passport_expiry: "passport_expiry";
        visa_expiry: "visa_expiry";
        trip: "trip";
        custom: "custom";
    }>>;
    content: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
}, z.core.$strip>;
export declare const templateQuerySchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<{
        birthday: "birthday";
        anniversary: "anniversary";
        passport_expiry: "passport_expiry";
        visa_expiry: "visa_expiry";
        trip: "trip";
        custom: "custom";
    }>>;
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const createTagSchema: z.ZodObject<{
    name: z.ZodString;
    color: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const updateTagSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const tagQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const assignTagSchema: z.ZodObject<{
    tagId: z.ZodString;
}, z.core.$strip>;
export declare const activityTypes: readonly ["note", "call", "email", "message", "reminder", "status_change"];
export declare const createActivitySchema: z.ZodObject<{
    customerId: z.ZodString;
    type: z.ZodEnum<{
        note: "note";
        call: "call";
        email: "email";
        message: "message";
        reminder: "reminder";
        status_change: "status_change";
    }>;
    content: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export declare const activityQuerySchema: z.ZodObject<{
    customerId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        note: "note";
        call: "call";
        email: "email";
        message: "message";
        reminder: "reminder";
        status_change: "status_change";
    }>>;
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const teamRoles: readonly ["admin", "manager", "staff", "viewer"];
export declare const inviteTeamMemberSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodString;
    role: z.ZodEnum<{
        admin: "admin";
        manager: "manager";
        staff: "staff";
        viewer: "viewer";
    }>;
    permissions: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const updateTeamMemberSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        admin: "admin";
        manager: "manager";
        staff: "staff";
        viewer: "viewer";
    }>>;
    permissions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const teamQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    agencyName: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    timezone: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const whatsappConfigSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    provider: z.ZodLiteral<"meta">;
    accessToken: z.ZodString;
    phoneNumberId: z.ZodString;
    businessAccountId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<"ultramsg">;
    ultramsgInstanceId: z.ZodString;
    ultramsgToken: z.ZodString;
}, z.core.$strip>], "provider">;
export declare const testMessageSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const cloudinaryConfigSchema: z.ZodObject<{
    cloudName: z.ZodString;
    apiKey: z.ZodString;
    apiSecret: z.ZodString;
}, z.core.$strip>;
export declare const updateProfileSchema: z.ZodObject<{
    agencyName: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const uploadSchema: z.ZodObject<{
    base64: z.ZodString;
    fileName: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    folder: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const sendMessageSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
export declare const groupTypes: readonly ["static", "dynamic"];
export declare const createGroupSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodEnum<{
        static: "static";
        dynamic: "dynamic";
    }>;
    customerIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    filters: z.ZodOptional<z.ZodObject<{
        tagIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        passportExpiryWithin: z.ZodOptional<z.ZodNumber>;
        visaExpiryWithin: z.ZodOptional<z.ZodNumber>;
        hasAnniversaryWithin: z.ZodOptional<z.ZodNumber>;
        isBirthdayWithin: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const updateGroupSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        static: "static";
        dynamic: "dynamic";
    }>>;
    customerIds: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
    filters: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        tagIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        passportExpiryWithin: z.ZodOptional<z.ZodNumber>;
        visaExpiryWithin: z.ZodOptional<z.ZodNumber>;
        hasAnniversaryWithin: z.ZodOptional<z.ZodNumber>;
        isBirthdayWithin: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const groupQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const leadStatuses: readonly ["new", "contacted", "qualified", "converted", "lost"];
export declare const createLeadSchema: z.ZodObject<{
    fullName: z.ZodString;
    whatsappNumber: z.ZodString;
    email: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        new: "new";
        contacted: "contacted";
        qualified: "qualified";
        converted: "converted";
        lost: "lost";
    }>>>;
    source: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    notes: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
}, z.core.$strip>;
export declare const updateLeadSchema: z.ZodObject<{
    fullName: z.ZodOptional<z.ZodString>;
    whatsappNumber: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        new: "new";
        contacted: "contacted";
        qualified: "qualified";
        converted: "converted";
        lost: "lost";
    }>>>>;
    source: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    notes: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
}, z.core.$strip>;
export declare const leadQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        new: "new";
        contacted: "contacted";
        qualified: "qualified";
        converted: "converted";
        lost: "lost";
    }>>;
    search: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const createPipelineStageSchema: z.ZodObject<{
    name: z.ZodString;
    color: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    order: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export declare const updatePipelineStageSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    order: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodNumber>>>;
}, z.core.$strip>;
export declare const createDealSchema: z.ZodObject<{
    title: z.ZodString;
    value: z.ZodNumber;
    currency: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    stageId: z.ZodString;
    leadId: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>;
    customerId: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>;
    expectedCloseDate: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>;
    notes: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
}, z.core.$strip>;
export declare const updateDealSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    stageId: z.ZodOptional<z.ZodString>;
    leadId: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>>;
    customerId: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>>;
    expectedCloseDate: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>>;
    notes: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
}, z.core.$strip>;
export declare const dealQuerySchema: z.ZodObject<{
    stageId: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const workflowTriggerTypes: readonly ["customer_created", "lead_created", "lead_converted", "deal_won", "tag_added"];
export declare const workflowActionTypes: readonly ["send_whatsapp", "send_email", "add_tag", "create_reminder"];
export declare const createWorkflowSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    triggerType: z.ZodEnum<{
        customer_created: "customer_created";
        lead_created: "lead_created";
        lead_converted: "lead_converted";
        deal_won: "deal_won";
        tag_added: "tag_added";
    }>;
    conditions: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
            not_equals: "not_equals";
            contains: "contains";
            greater_than: "greater_than";
            less_than: "less_than";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>;
    }, z.core.$strip>>>>;
    actions: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            send_whatsapp: "send_whatsapp";
            send_email: "send_email";
            add_tag: "add_tag";
            create_reminder: "create_reminder";
        }>;
        config: z.ZodRecord<z.ZodString, z.ZodAny>;
    }, z.core.$strip>>;
    isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const updateWorkflowSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    triggerType: z.ZodOptional<z.ZodEnum<{
        customer_created: "customer_created";
        lead_created: "lead_created";
        lead_converted: "lead_converted";
        deal_won: "deal_won";
        tag_added: "tag_added";
    }>>;
    conditions: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        operator: z.ZodEnum<{
            equals: "equals";
            not_equals: "not_equals";
            contains: "contains";
            greater_than: "greater_than";
            less_than: "less_than";
        }>;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>;
    }, z.core.$strip>>>>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            send_whatsapp: "send_whatsapp";
            send_email: "send_email";
            add_tag: "add_tag";
            create_reminder: "create_reminder";
        }>;
        config: z.ZodRecord<z.ZodString, z.ZodAny>;
    }, z.core.$strip>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
}, z.core.$strip>;
export declare const workflowQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const emailConfigSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    provider: z.ZodLiteral<"sendgrid">;
    apiKey: z.ZodString;
    fromEmail: z.ZodString;
    fromName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<"smtp">;
    host: z.ZodString;
    port: z.ZodCoercedNumber<unknown>;
    user: z.ZodString;
    pass: z.ZodString;
    fromEmail: z.ZodString;
    fromName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<"ses">;
    apiKey: z.ZodString;
    apiSecret: z.ZodString;
    region: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    fromEmail: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<"gmail">;
    fromEmail: z.ZodOptional<z.ZodString>;
    fromName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<"gmail_smtp">;
    fromEmail: z.ZodString;
    pass: z.ZodString;
    user: z.ZodOptional<z.ZodString>;
    fromName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    provider: z.ZodLiteral<null>;
}, z.core.$strip>], "provider">;
export declare const createEmailTemplateSchema: z.ZodObject<{
    name: z.ZodString;
    subject: z.ZodString;
    type: z.ZodEnum<{
        birthday: "birthday";
        anniversary: "anniversary";
        passport_expiry: "passport_expiry";
        visa_expiry: "visa_expiry";
        trip: "trip";
        custom: "custom";
    }>;
    content: z.ZodString;
    isDefault: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const updateEmailTemplateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    subject: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        birthday: "birthday";
        anniversary: "anniversary";
        passport_expiry: "passport_expiry";
        visa_expiry: "visa_expiry";
        trip: "trip";
        custom: "custom";
    }>>;
    content: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
}, z.core.$strip>;
export declare const emailTemplateQuerySchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<{
        birthday: "birthday";
        anniversary: "anniversary";
        passport_expiry: "passport_expiry";
        visa_expiry: "visa_expiry";
        trip: "trip";
        custom: "custom";
    }>>;
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const createWebhookSchema: z.ZodObject<{
    targetUrl: z.ZodString;
    events: z.ZodArray<z.ZodString>;
    isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    secretKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateWebhookSchema: z.ZodObject<{
    targetUrl: z.ZodOptional<z.ZodString>;
    events: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    secretKey: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
