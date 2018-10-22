import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VehicleComponent } from 'app/entities/vehicle/vehicle.component';

/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [VehicleComponent],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KotlinsterEntityModule {}
