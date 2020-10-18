import { Connection } from 'typeorm';
import { Tenant } from '../tenant/tenant.entity';
import { IntegrationTenant } from './integration-tenant.entity';
import * as faker from 'faker';
import { Organization } from '../organization/organization.entity';

export const createRandomIntegrationTenant = async (
	connection: Connection,
	tenants: Tenant[]
): Promise<IntegrationTenant[]> => {
	if (!tenants) {
		console.warn(
			'Warning: tenants not found, Integration Tenant  will not be created'
		);
		return;
	}

	const integrationTenants: IntegrationTenant[] = [];

	for (const tenant of tenants) {
		const organizations = await connection.manager.find(Organization, {
			where: [{ tenant: tenant }]
		});
		const integrationTenant = new IntegrationTenant();
		//todo:change name with some real values;
		integrationTenant.name = faker.company.companyName();
		integrationTenant.entitySettings = [];
		integrationTenant.tenant = tenant;
		integrationTenant.organization = faker.random.arrayElement(
			organizations
		);

		integrationTenants.push(integrationTenant);
	}

	await connection.manager.save(integrationTenants);
};
