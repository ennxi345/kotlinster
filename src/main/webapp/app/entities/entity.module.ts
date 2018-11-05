import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EntityService } from '../../entity.service';
import { VehicleComponent } from 'app/entities/vehicle/vehicle.component';
import { RouterModule } from '@angular/router';
import { entityRoute } from 'app/entities/entity.route';
import { CommonModule } from '@angular/common';

/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
const ENTITY_STATES = [...entityRoute];

@NgModule({
    // prettier-ignore
    imports: [
        RouterModule.forRoot(ENTITY_STATES, {useHash: true}),
        FormsModule,
        HttpClientModule,
        CommonModule
    ],
    declarations: [VehicleComponent],
    entryComponents: [],
    providers: [EntityService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KotlinsterEntityModule {}
