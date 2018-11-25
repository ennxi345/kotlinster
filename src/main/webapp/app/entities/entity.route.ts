import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Routes } from '@angular/router';
import { VehicleComponent } from 'app/entities/vehicle/vehicle.component';
import { HeadquarterComponent } from 'app/entities/headquarter/headquarter.component';
import { HeadquarterDialogComponent } from 'app/entities/headquarter/headquarter.dialog.component';
import { JhiPaginationUtil } from 'ng-jhipster';
import { Injectable } from '@angular/core';

export const entityRoute: Routes = [
    {
        path: 'vehicle',
        component: VehicleComponent
    },
    {
        path: 'headquarter',
        component: HeadquarterComponent
    },
    {
        path: 'headquarter/:id',
        component: HeadquarterDialogComponent
    }
];
