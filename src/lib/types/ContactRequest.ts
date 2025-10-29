export type InquiryType =
	| "General Inquiry"
	| "Project Collaboration"
	| "Job Opportunity"
	| "Freelance Work"
	| "Bug Report"
	| "Other"
	| "";

export interface ContactRequest {
	name: string;
	email: string;
	inquiryType: InquiryType;
	subject: string;
	message: string;
	cfToken: string;
}
