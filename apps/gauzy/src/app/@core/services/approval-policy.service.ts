import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
	IApprovalPolicy,
	IApprovalPolicyFindInput,
	IApprovalPolicyCreateInput,
	IPagination
} from '@gauzy/contracts';
import { first } from 'rxjs/operators';
import { API_PREFIX } from '../constants/app.constants';

@Injectable()
export class ApprovalPolicyService {
	APPROVAL_POLICY_URL = `${API_PREFIX}/approval-policy`;

	constructor(private http: HttpClient) {}

	getAll(
		relations?: string[],
		findInput?: IApprovalPolicyFindInput
	): Promise<IPagination<IApprovalPolicy>> {
		const data = JSON.stringify({ relations, findInput });
		return this.http
			.get<IPagination<IApprovalPolicy>>(
				`${this.APPROVAL_POLICY_URL}`,
				{
					params: { data }
				}
			)
			.pipe(first())
			.toPromise();
	}

	getForRequestApproval(
		relations?: string[],
		findInput?: IApprovalPolicyFindInput
	): Promise<IPagination<IApprovalPolicy>> {
		const data = JSON.stringify({ relations, findInput });
		return this.http
			.get<IPagination<IApprovalPolicy>>(
				`${this.APPROVAL_POLICY_URL}/request-approval`,
				{
					params: { data }
				}
			)
			.pipe(first())
			.toPromise();
	}

	delete(id: string): Promise<any> {
		return this.http
			.delete(`${this.APPROVAL_POLICY_URL}/${id}`)
			.pipe(first())
			.toPromise();
	}

	save(approvalPolicy: IApprovalPolicyCreateInput): Promise<IApprovalPolicy> {
		if (!approvalPolicy.id) {
			return this.http
				.post<IApprovalPolicy>(this.APPROVAL_POLICY_URL, approvalPolicy)
				.pipe(first())
				.toPromise();
		} else {
			return this.http
				.put<IApprovalPolicy>(
					`${this.APPROVAL_POLICY_URL}/${approvalPolicy.id}`,
					approvalPolicy
				)
				.pipe(first())
				.toPromise();
		}
	}
}
