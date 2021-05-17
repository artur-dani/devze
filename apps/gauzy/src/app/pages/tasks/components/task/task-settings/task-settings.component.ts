import { Component } from '@angular/core';
import {
	ITask,
	IOrganizationProject,
	TaskListTypeEnum,
	ITaskResponse
} from '@gauzy/contracts';
import { Observable } from 'rxjs';
import { map, tap, switchMap, take } from 'rxjs/operators';
import { TasksStoreService } from '../../../../../@core/services/tasks-store.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TasksService } from 'apps/gauzy/src/app/@core/services';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
	selector: 'ngx-task-settings',
	templateUrl: './task-settings.component.html',
	styleUrls: ['./task-settings.component.scss']
})
export class TaskSettingsComponent {
	tasks$: Observable<ITask[]>;
	projects$: Observable<IOrganizationProject[]>;
	project$: Observable<IOrganizationProject>;

	constructor(
		private _store: TasksStoreService,
		private route: ActivatedRoute,
		private taskService: TasksService
	) {
		this.tasks$ = this._store.tasks$;

		this.project$ = this.route.params.pipe(
			switchMap(({ id: currentProjectId }: { id: string }) => {
				const findObj = {
					projectId: currentProjectId
				}
				return this.taskService.getAllTasks(findObj).pipe(
					map((tasks: ITaskResponse) => {
						const projectTasks = tasks.items;
						if (projectTasks.length > 0) {
							return {
								...projectTasks[0].project,
								tasks: projectTasks
							};
						}
						return null;
					}),
					untilDestroyed(this)
				);
			})
		);
	}

	changeProject(evt: TaskListTypeEnum): void {
		this.project$
			.pipe(
				tap(({ id }: IOrganizationProject) => {
					this._store.updateTasksViewMode(id, evt);
				}),
				take(1)
			)
			.subscribe();
	}
}
