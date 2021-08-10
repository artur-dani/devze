import {
	Controller,
	Get,
	HttpStatus,
	Query,
	UseGuards,
	Put,
	Param,
	Body
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IPagination } from '@gauzy/contracts';
import { CrudController } from './../core/crud';
import { OrganizationPositionsService } from './organization-positions.service';
import { OrganizationPositions } from './organization-positions.entity';
import { TenantPermissionGuard } from './../shared/guards';
import { ParseJsonPipe, UUIDValidationPipe } from './../shared/pipes';

@ApiTags('OrganizationPositions')
@UseGuards(TenantPermissionGuard)
@Controller()
export class OrganizationPositionsController extends CrudController<OrganizationPositions> {
	constructor(
		private readonly organizationPositionsService: OrganizationPositionsService
	) {
		super(organizationPositionsService);
	}

	@ApiOperation({
		summary: 'Find all organization positions recurring expense.'
	})
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'Found positions recurring expense',
		type: OrganizationPositions
	})
	@ApiResponse({
		status: HttpStatus.NOT_FOUND,
		description: 'Record not found'
	})
	@Get()
	async findAllOrganizationPositions(
		@Query('data', ParseJsonPipe) data: any
	): Promise<IPagination<OrganizationPositions>> {
		const { relations = [], findInput } = data;
		return this.organizationPositionsService.findAll({
			where: findInput,
			relations
		});
	}

	@Put(':id')
	async updateOrganizationTeam(
		@Param('id', UUIDValidationPipe) id: string,
		@Body() entity: OrganizationPositions,
		...options: any[]
	): Promise<OrganizationPositions> {
		return this.organizationPositionsService.create({
			id,
			...entity
		});
	}
}
