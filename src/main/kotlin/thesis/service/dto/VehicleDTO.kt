package thesis.service.dto

import thesis.entities.Vehicle


class VehicleDTO() {

    var id: Long? = null

    var licenseNumber: Long? = null

    var age: Int? = null

    var brand: String? = null

    var owner: String? = null


    companion object {

        private const val serialVersionUID = 1L
    }
}
