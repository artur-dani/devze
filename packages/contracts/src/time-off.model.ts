import { IBasePerTenantAndOrganizationEntityModel } from './base-entity.model';
import { IEmployee } from './employee.model';

export interface ITimeOffPolicy
	extends IBasePerTenantAndOrganizationEntityModel {
	name: string;
	requiresApproval: boolean;
	paid: boolean;
	employees?: IEmployee[];
}

export interface ITimeOffPolicyCreateInput
	extends IBasePerTenantAndOrganizationEntityModel {
	employees?: IEmployee[];
	// teams?: OrganizationTeams[];
	name?: string;
	requiresApproval?: boolean;
	paid?: boolean;
}

export interface ITimeOffPolicyUpdateInput
	extends IBasePerTenantAndOrganizationEntityModel {
	employees?: IEmployee[];
	// teams?: OrganizationTeams[];
	name?: string;
	requiresApproval?: boolean;
	paid?: boolean;
}

export interface ITimeOffPolicyFindInput
	extends IBasePerTenantAndOrganizationEntityModel {
	employees?: IEmployee[];
	// teams?: OrganizationTeams[];
	name?: string;
	requiresApproval?: boolean;
	paid?: boolean;
}

export interface ITimeOff extends IBasePerTenantAndOrganizationEntityModel {
	employees?: IEmployee[];
	description?: string;
	policy?: ITimeOffPolicy;
	start: Date;
	end: Date;
	requestDate: Date;
	status?: string;
	isHoliday?: boolean;
	documentUrl?: string;
	fullName?: string;
	imageUrl?: string;
	isArchived?: boolean;
}

export interface ITimeOffFindInput
	extends IBasePerTenantAndOrganizationEntityModel {
	employeeId?: string;
	isArchived?: boolean;
}

export interface ITimeOffUpdateInput {
	status?: string;
}

export interface ITimeOffCreateInput
	extends IBasePerTenantAndOrganizationEntityModel {
	employees?: IEmployee[];
	description?: string;
	policy?: ITimeOffPolicy;
	start?: Date;
	end?: Date;
	requestDate?: Date;
	status?: string;
	isHoliday?: boolean;
	documentUrl?: string;
}

export enum StatusTypesEnum {
	REQUESTED = 'Requested',
	APPROVED = 'Approved',
	DENIED = 'Denied',
	ALL = 'All'
}

export enum StatusTypesMapRequestApprovalEnum {
	Requested = 1,
	Approved = 2,
	Denied = 3
}
export interface ITimeOffPolicyVM {
	id: string;
	name: string;
	requiresApproval: boolean;
	paid: boolean;
	employees: IEmployee[];
}
