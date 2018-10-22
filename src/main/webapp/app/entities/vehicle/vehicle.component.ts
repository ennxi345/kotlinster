import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';
import { Observable } from 'rxjs';
import { Vehicle } from 'app/entities/vehicle/vehicle.model';
import { EntityService } from '../../../entity.service';

@Component({
    selector: 'jhi-vehicle',
    templateUrl: './vehicle.component.html'
})
export class VehicleComponent implements OnInit, OnDestroy {
    readOnly: boolean;
    isSaving: boolean;
    loaded: boolean;
    vehicle: Vehicle;

    private urlParamSubscription: Subscription;
    private queryParamSubscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private alertService: JhiAlertService,
        private entityService: EntityService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.vehicle = new Vehicle();
    }

    ngOnInit() {
        this.registerChangeInVehicles();
    }

    load(id) {
        if (id) {
        }
    }

    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        if (this.queryParamSubscription) {
            this.queryParamSubscription.unsubscribe();
        }

        if (this.urlParamSubscription) {
            this.urlParamSubscription.unsubscribe();
        }
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInVehicles() {
        this.eventSubscriber = this.eventManager.subscribe('vehicleListModification', response => this.load(this.vehicle.id));
    }

    save(): void {
        if (this.vehicle.id === undefined) {
            this.subscribeToSaveResponse(this.entityService.create(this.vehicle));
        } else {
            this.subscribeToSaveResponse(this.entityService.update(this.vehicle));
        }
    }

    private;

    subscribeToSaveResponse(result: Observable<Vehicle>) {
        this.alertService.clear();
        result.subscribe(
            (res: Vehicle) => {
                this.onSaveSuccess(res);
            },
            (res: Response) => this.onSaveError(res)
        );
    }

    private onSaveSuccess(result: Vehicle) {
        this.isSaving = false;

        if (this.vehicle.id == null) {
            this.router.navigate(['/novenyvedelem/' + result.id], { replaceUrl: true });
            this.eventManager.broadcast({ name: '-Modification', content: 'OK' });
        } else {
            this.router.navigate(['/novenyvedelem/' + result.id], { replaceUrl: true });
            this.load(result.id);
        }
    }

    private onSaveError(error) {
        console.log('ERROR');

        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
        this.isSaving = false;
    }

    clear(): void {
        window.history.back();
    }
}
