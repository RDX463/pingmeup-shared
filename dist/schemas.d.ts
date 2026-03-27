import { z } from 'zod';
export declare const createCustomerSchema: z.ZodObject<{
    fullName: z.ZodString;
    whatsappNumber: z.ZodString;
    dateOfBirth: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    anniversaryDate: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    passportNumber: z.ZodOptional<z.ZodString>;
    visaNumber: z.ZodOptional<z.ZodString>;
    passportExpiry: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    visaExpiry: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    notes: z.ZodOptional<z.ZodString>;
    isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    fullName: string;
    whatsappNumber: string;
    isActive: boolean;
    dateOfBirth?: string | null | undefined;
    anniversaryDate?: string | null | undefined;
    passportNumber?: string | undefined;
    visaNumber?: string | undefined;
    passportExpiry?: string | null | undefined;
    visaExpiry?: string | null | undefined;
    notes?: string | undefined;
}, {
    fullName: string;
    whatsappNumber: string;
    dateOfBirth?: string | null | undefined;
    anniversaryDate?: string | null | undefined;
    passportNumber?: string | undefined;
    visaNumber?: string | undefined;
    passportExpiry?: string | null | undefined;
    visaExpiry?: string | null | undefined;
    notes?: string | undefined;
    isActive?: boolean | undefined;
}>;
export declare const updateCustomerSchema: z.ZodObject<{
    fullName: z.ZodOptional<z.ZodString>;
    whatsappNumber: z.ZodOptional<z.ZodString>;
    dateOfBirth: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    anniversaryDate: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    passportNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    visaNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    passportExpiry: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    visaExpiry: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
}, "strip", z.ZodTypeAny, {
    fullName?: string | undefined;
    whatsappNumber?: string | undefined;
    dateOfBirth?: string | null | undefined;
    anniversaryDate?: string | null | undefined;
    passportNumber?: string | undefined;
    visaNumber?: string | undefined;
    passportExpiry?: string | null | undefined;
    visaExpiry?: string | null | undefined;
    notes?: string | undefined;
    isActive?: boolean | undefined;
}, {
    fullName?: string | undefined;
    whatsappNumber?: string | undefined;
    dateOfBirth?: string | null | undefined;
    anniversaryDate?: string | null | undefined;
    passportNumber?: string | undefined;
    visaNumber?: string | undefined;
    passportExpiry?: string | null | undefined;
    visaExpiry?: string | null | undefined;
    notes?: string | undefined;
    isActive?: boolean | undefined;
}>;
export declare const customerQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    tagId: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    search?: string | undefined;
    tagId?: string | undefined;
}, {
    search?: string | undefined;
    tagId?: string | undefined;
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const reminderTypes: readonly ["birthday", "anniversary", "passport_expiry", "visa_expiry", "trip", "custom"];
export declare const createReminderSchema: z.ZodObject<{
    customerId: z.ZodString;
    type: z.ZodEnum<["birthday", "anniversary", "passport_expiry", "visa_expiry", "trip", "custom"]>;
    title: z.ZodString;
    triggerDate: z.ZodString;
    daysBefore: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    templateId: z.ZodOptional<z.ZodString>;
    customMessage: z.ZodOptional<z.ZodString>;
    recurrence: z.ZodDefault<z.ZodOptional<z.ZodEnum<["none", "daily", "weekly", "monthly", "yearly"]>>>;
    notificationChannels: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    type: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom";
    customerId: string;
    title: string;
    triggerDate: string;
    daysBefore: number;
    recurrence: "none" | "daily" | "weekly" | "monthly" | "yearly";
    notificationChannels: string[];
    templateId?: string | undefined;
    customMessage?: string | undefined;
}, {
    type: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom";
    customerId: string;
    title: string;
    triggerDate: string;
    daysBefore?: number | undefined;
    templateId?: string | undefined;
    customMessage?: string | undefined;
    recurrence?: "none" | "daily" | "weekly" | "monthly" | "yearly" | undefined;
    notificationChannels?: string[] | undefined;
}>;
export declare const updateReminderSchema: z.ZodObject<{
    customerId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<["birthday", "anniversary", "passport_expiry", "visa_expiry", "trip", "custom"]>>;
    title: z.ZodOptional<z.ZodString>;
    triggerDate: z.ZodOptional<z.ZodString>;
    daysBefore: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodNumber>>>;
    templateId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    customMessage: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    recurrence: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodEnum<["none", "daily", "weekly", "monthly", "yearly"]>>>>;
    notificationChannels: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>>;
}, "strip", z.ZodTypeAny, {
    type?: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom" | undefined;
    customerId?: string | undefined;
    title?: string | undefined;
    triggerDate?: string | undefined;
    daysBefore?: number | undefined;
    templateId?: string | undefined;
    customMessage?: string | undefined;
    recurrence?: "none" | "daily" | "weekly" | "monthly" | "yearly" | undefined;
    notificationChannels?: string[] | undefined;
}, {
    type?: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom" | undefined;
    customerId?: string | undefined;
    title?: string | undefined;
    triggerDate?: string | undefined;
    daysBefore?: number | undefined;
    templateId?: string | undefined;
    customMessage?: string | undefined;
    recurrence?: "none" | "daily" | "weekly" | "monthly" | "yearly" | undefined;
    notificationChannels?: string[] | undefined;
}>;
export declare const reminderQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["scheduled", "sent", "failed", "cancelled"]>>;
    type: z.ZodOptional<z.ZodEnum<["birthday", "anniversary", "passport_expiry", "visa_expiry", "trip", "custom"]>>;
    days: z.ZodOptional<z.ZodNumber>;
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    type?: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom" | undefined;
    status?: "scheduled" | "sent" | "failed" | "cancelled" | undefined;
    days?: number | undefined;
}, {
    type?: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom" | undefined;
    status?: "scheduled" | "sent" | "failed" | "cancelled" | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    days?: number | undefined;
}>;
export declare const createBroadcastSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    mediaUrl: z.ZodOptional<z.ZodString>;
    mediaType: z.ZodOptional<z.ZodString>;
    customerIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    groupId: z.ZodOptional<z.ZodString>;
    sendNow: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    templateName: z.ZodOptional<z.ZodString>;
    languageCode: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    templateComponents: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
}, "strip", z.ZodTypeAny, {
    sendNow: boolean;
    languageCode: string;
    message?: string | undefined;
    title?: string | undefined;
    mediaUrl?: string | undefined;
    mediaType?: string | undefined;
    customerIds?: string[] | undefined;
    groupId?: string | undefined;
    templateName?: string | undefined;
    templateComponents?: any[] | undefined;
}, {
    message?: string | undefined;
    title?: string | undefined;
    mediaUrl?: string | undefined;
    mediaType?: string | undefined;
    customerIds?: string[] | undefined;
    groupId?: string | undefined;
    sendNow?: boolean | undefined;
    templateName?: string | undefined;
    languageCode?: string | undefined;
    templateComponents?: any[] | undefined;
}>;
export declare const broadcastQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["draft", "sending", "completed", "failed"]>>;
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    status?: "failed" | "draft" | "sending" | "completed" | undefined;
}, {
    status?: "failed" | "draft" | "sending" | "completed" | undefined;
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const templateTypes: readonly ["birthday", "anniversary", "passport_expiry", "visa_expiry", "trip", "custom"];
export declare const createTemplateSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodEnum<["birthday", "anniversary", "passport_expiry", "visa_expiry", "trip", "custom"]>;
    content: z.ZodString;
    isDefault: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    type: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom";
    name: string;
    content: string;
    isDefault: boolean;
}, {
    type: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom";
    name: string;
    content: string;
    isDefault?: boolean | undefined;
}>;
export declare const updateTemplateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<["birthday", "anniversary", "passport_expiry", "visa_expiry", "trip", "custom"]>>;
    content: z.ZodOptional<z.ZodString>;
    isDefault: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
}, "strip", z.ZodTypeAny, {
    type?: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom" | undefined;
    name?: string | undefined;
    content?: string | undefined;
    isDefault?: boolean | undefined;
}, {
    type?: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom" | undefined;
    name?: string | undefined;
    content?: string | undefined;
    isDefault?: boolean | undefined;
}>;
export declare const templateQuerySchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<["birthday", "anniversary", "passport_expiry", "visa_expiry", "trip", "custom"]>>;
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    type?: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom" | undefined;
}, {
    type?: "birthday" | "anniversary" | "passport_expiry" | "visa_expiry" | "trip" | "custom" | undefined;
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const createTagSchema: z.ZodObject<{
    name: z.ZodString;
    color: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    color: string;
}, {
    name: string;
    color?: string | undefined;
}>;
export declare const updateTagSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    color?: string | undefined;
}, {
    name?: string | undefined;
    color?: string | undefined;
}>;
export declare const tagQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    search?: string | undefined;
}, {
    search?: string | undefined;
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const assignTagSchema: z.ZodObject<{
    tagId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tagId: string;
}, {
    tagId: string;
}>;
export declare const activityTypes: readonly ["note", "call", "email", "message", "reminder", "status_change"];
export declare const createActivitySchema: z.ZodObject<{
    customerId: z.ZodString;
    type: z.ZodEnum<["note", "call", "email", "message", "reminder", "status_change"]>;
    content: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    type: "message" | "note" | "call" | "email" | "reminder" | "status_change";
    customerId: string;
    content: string;
    metadata?: Record<string, any> | undefined;
}, {
    type: "message" | "note" | "call" | "email" | "reminder" | "status_change";
    customerId: string;
    content: string;
    metadata?: Record<string, any> | undefined;
}>;
export declare const activityQuerySchema: z.ZodObject<{
    customerId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<["note", "call", "email", "message", "reminder", "status_change"]>>;
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    type?: "message" | "note" | "call" | "email" | "reminder" | "status_change" | undefined;
    customerId?: string | undefined;
}, {
    type?: "message" | "note" | "call" | "email" | "reminder" | "status_change" | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    customerId?: string | undefined;
}>;
export declare const teamRoles: readonly ["admin", "manager", "agent"];
export declare const inviteTeamMemberSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodString;
    role: z.ZodEnum<["admin", "manager", "agent"]>;
    permissions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    role: "admin" | "manager" | "agent";
    permissions?: string[] | undefined;
}, {
    name: string;
    email: string;
    role: "admin" | "manager" | "agent";
    permissions?: string[] | undefined;
}>;
export declare const updateTeamMemberSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<["admin", "manager", "agent"]>>;
    permissions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    isActive?: boolean | undefined;
    name?: string | undefined;
    role?: "admin" | "manager" | "agent" | undefined;
    permissions?: string[] | undefined;
}, {
    isActive?: boolean | undefined;
    name?: string | undefined;
    role?: "admin" | "manager" | "agent" | undefined;
    permissions?: string[] | undefined;
}>;
export declare const teamQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
}, {
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    agencyName: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    timezone: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    agencyName: string;
    timezone: string;
    phone?: string | undefined;
}, {
    email: string;
    password: string;
    agencyName: string;
    phone?: string | undefined;
    timezone?: string | undefined;
}>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const whatsappConfigSchema: z.ZodDiscriminatedUnion<"provider", [z.ZodObject<{
    provider: z.ZodLiteral<"meta">;
    accessToken: z.ZodString;
    phoneNumberId: z.ZodString;
    businessAccountId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    provider: "meta";
    accessToken: string;
    phoneNumberId: string;
    businessAccountId?: string | null | undefined;
}, {
    provider: "meta";
    accessToken: string;
    phoneNumberId: string;
    businessAccountId?: string | null | undefined;
}>, z.ZodObject<{
    provider: z.ZodLiteral<"ultramsg">;
    ultramsgInstanceId: z.ZodString;
    ultramsgToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    provider: "ultramsg";
    ultramsgInstanceId: string;
    ultramsgToken: string;
}, {
    provider: "ultramsg";
    ultramsgInstanceId: string;
    ultramsgToken: string;
}>]>;
export declare const testMessageSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    phoneNumber: string;
    message?: string | undefined;
}, {
    phoneNumber: string;
    message?: string | undefined;
}>;
export declare const cloudinaryConfigSchema: z.ZodObject<{
    cloudName: z.ZodString;
    apiKey: z.ZodString;
    apiSecret: z.ZodString;
}, "strip", z.ZodTypeAny, {
    cloudName: string;
    apiKey: string;
    apiSecret: string;
}, {
    cloudName: string;
    apiKey: string;
    apiSecret: string;
}>;
export declare const updateProfileSchema: z.ZodObject<{
    agencyName: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    agencyName?: string | undefined;
    phone?: string | undefined;
    timezone?: string | undefined;
}, {
    agencyName?: string | undefined;
    phone?: string | undefined;
    timezone?: string | undefined;
}>;
export declare const uploadSchema: z.ZodObject<{
    base64: z.ZodString;
    fileName: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    folder: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    base64: string;
    fileName: string;
    folder: string;
}, {
    base64: string;
    fileName?: string | undefined;
    folder?: string | undefined;
}>;
export declare const sendMessageSchema: z.ZodObject<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
export declare const groupTypes: readonly ["static", "dynamic"];
export declare const createGroupSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodEnum<["static", "dynamic"]>;
    customerIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    filters: z.ZodOptional<z.ZodObject<{
        tagIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        passportExpiryWithin: z.ZodOptional<z.ZodNumber>;
        visaExpiryWithin: z.ZodOptional<z.ZodNumber>;
        hasAnniversaryWithin: z.ZodOptional<z.ZodNumber>;
        isBirthdayWithin: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        tagIds?: string[] | undefined;
        passportExpiryWithin?: number | undefined;
        visaExpiryWithin?: number | undefined;
        hasAnniversaryWithin?: number | undefined;
        isBirthdayWithin?: number | undefined;
    }, {
        tagIds?: string[] | undefined;
        passportExpiryWithin?: number | undefined;
        visaExpiryWithin?: number | undefined;
        hasAnniversaryWithin?: number | undefined;
        isBirthdayWithin?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "static" | "dynamic";
    customerIds: string[];
    name: string;
    filters?: {
        tagIds?: string[] | undefined;
        passportExpiryWithin?: number | undefined;
        visaExpiryWithin?: number | undefined;
        hasAnniversaryWithin?: number | undefined;
        isBirthdayWithin?: number | undefined;
    } | undefined;
}, {
    type: "static" | "dynamic";
    name: string;
    customerIds?: string[] | undefined;
    filters?: {
        tagIds?: string[] | undefined;
        passportExpiryWithin?: number | undefined;
        visaExpiryWithin?: number | undefined;
        hasAnniversaryWithin?: number | undefined;
        isBirthdayWithin?: number | undefined;
    } | undefined;
}>;
export declare const updateGroupSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<["static", "dynamic"]>>;
    customerIds: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>>;
    filters: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        tagIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        passportExpiryWithin: z.ZodOptional<z.ZodNumber>;
        visaExpiryWithin: z.ZodOptional<z.ZodNumber>;
        hasAnniversaryWithin: z.ZodOptional<z.ZodNumber>;
        isBirthdayWithin: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        tagIds?: string[] | undefined;
        passportExpiryWithin?: number | undefined;
        visaExpiryWithin?: number | undefined;
        hasAnniversaryWithin?: number | undefined;
        isBirthdayWithin?: number | undefined;
    }, {
        tagIds?: string[] | undefined;
        passportExpiryWithin?: number | undefined;
        visaExpiryWithin?: number | undefined;
        hasAnniversaryWithin?: number | undefined;
        isBirthdayWithin?: number | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    type?: "static" | "dynamic" | undefined;
    customerIds?: string[] | undefined;
    name?: string | undefined;
    filters?: {
        tagIds?: string[] | undefined;
        passportExpiryWithin?: number | undefined;
        visaExpiryWithin?: number | undefined;
        hasAnniversaryWithin?: number | undefined;
        isBirthdayWithin?: number | undefined;
    } | undefined;
}, {
    type?: "static" | "dynamic" | undefined;
    customerIds?: string[] | undefined;
    name?: string | undefined;
    filters?: {
        tagIds?: string[] | undefined;
        passportExpiryWithin?: number | undefined;
        visaExpiryWithin?: number | undefined;
        hasAnniversaryWithin?: number | undefined;
        isBirthdayWithin?: number | undefined;
    } | undefined;
}>;
export declare const groupQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
}, {
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const leadStatuses: readonly ["new", "contacted", "qualified", "converted", "lost"];
export declare const createLeadSchema: z.ZodObject<{
    fullName: z.ZodString;
    whatsappNumber: z.ZodString;
    email: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<["new", "contacted", "qualified", "converted", "lost"]>>>;
    source: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    notes: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
}, "strip", z.ZodTypeAny, {
    fullName: string;
    whatsappNumber: string;
    status: "new" | "contacted" | "qualified" | "converted" | "lost";
    notes?: string | undefined;
    email?: string | null | undefined;
    source?: string | undefined;
}, {
    fullName: string;
    whatsappNumber: string;
    notes?: string | undefined;
    status?: "new" | "contacted" | "qualified" | "converted" | "lost" | undefined;
    email?: string | null | undefined;
    source?: string | undefined;
}>;
export declare const updateLeadSchema: z.ZodObject<{
    fullName: z.ZodOptional<z.ZodString>;
    whatsappNumber: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodEnum<["new", "contacted", "qualified", "converted", "lost"]>>>>;
    source: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    notes: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
}, "strip", z.ZodTypeAny, {
    fullName?: string | undefined;
    whatsappNumber?: string | undefined;
    notes?: string | undefined;
    status?: "new" | "contacted" | "qualified" | "converted" | "lost" | undefined;
    email?: string | null | undefined;
    source?: string | undefined;
}, {
    fullName?: string | undefined;
    whatsappNumber?: string | undefined;
    notes?: string | undefined;
    status?: "new" | "contacted" | "qualified" | "converted" | "lost" | undefined;
    email?: string | null | undefined;
    source?: string | undefined;
}>;
export declare const leadQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["new", "contacted", "qualified", "converted", "lost"]>>;
    search: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    status?: "new" | "contacted" | "qualified" | "converted" | "lost" | undefined;
    search?: string | undefined;
}, {
    status?: "new" | "contacted" | "qualified" | "converted" | "lost" | undefined;
    search?: string | undefined;
    page?: number | undefined;
    limit?: number | undefined;
}>;
export declare const createPipelineStageSchema: z.ZodObject<{
    name: z.ZodString;
    color: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    order: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    color: string;
    order: number;
}, {
    name: string;
    color?: string | undefined;
    order?: number | undefined;
}>;
export declare const updatePipelineStageSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    order: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodNumber>>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    color?: string | undefined;
    order?: number | undefined;
}, {
    name?: string | undefined;
    color?: string | undefined;
    order?: number | undefined;
}>;
export declare const createDealSchema: z.ZodObject<{
    title: z.ZodString;
    value: z.ZodNumber;
    currency: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    stageId: z.ZodString;
    leadId: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>;
    customerId: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>;
    expectedCloseDate: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>;
    notes: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
}, "strip", z.ZodTypeAny, {
    value: number;
    title: string;
    currency: string;
    stageId: string;
    notes?: string | undefined;
    customerId?: string | null | undefined;
    leadId?: string | null | undefined;
    expectedCloseDate?: string | null | undefined;
}, {
    value: number;
    title: string;
    stageId: string;
    notes?: string | undefined;
    customerId?: string | null | undefined;
    currency?: string | undefined;
    leadId?: string | null | undefined;
    expectedCloseDate?: string | null | undefined;
}>;
export declare const updateDealSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    stageId: z.ZodOptional<z.ZodString>;
    leadId: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>>;
    customerId: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>>;
    expectedCloseDate: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>>>>;
    notes: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
}, "strip", z.ZodTypeAny, {
    notes?: string | undefined;
    value?: number | undefined;
    customerId?: string | null | undefined;
    title?: string | undefined;
    currency?: string | undefined;
    stageId?: string | undefined;
    leadId?: string | null | undefined;
    expectedCloseDate?: string | null | undefined;
}, {
    notes?: string | undefined;
    value?: number | undefined;
    customerId?: string | null | undefined;
    title?: string | undefined;
    currency?: string | undefined;
    stageId?: string | undefined;
    leadId?: string | null | undefined;
    expectedCloseDate?: string | null | undefined;
}>;
export declare const dealQuerySchema: z.ZodObject<{
    stageId: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    stageId?: string | undefined;
}, {
    page?: number | undefined;
    limit?: number | undefined;
    stageId?: string | undefined;
}>;
