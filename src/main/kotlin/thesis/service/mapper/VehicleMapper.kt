package thesis.service.mapper

import org.mapstruct.Mapper
import org.springframework.beans.factory.annotation.Autowired
import thesis.domain.Authority
import thesis.entities.Vehicle
import thesis.repository.VehicleRepository
import thesis.service.dto.VehicleDTO
import java.util.*

@Mapper(componentModel = "spring")
abstract class VehicleMapper {
    @Autowired
    private val repository: VehicleRepository? = null


    fun vehicleToVehicleDTO(vehicle: Vehicle): VehicleDTO {
        val vehicleDTO = VehicleDTO()
        vehicleDTO.id = vehicle.id
        vehicleDTO.age = vehicle.age
        vehicleDTO.brand = vehicle.brand
        vehicleDTO.licenseNumber = vehicle.licenseNumber
        vehicleDTO.owner = vehicle.owner
        return vehicleDTO
    }

    fun vehicleDTOToVehicle(vehicleDTO: VehicleDTO?): Vehicle? {
        return if (vehicleDTO == null) {
            null
        } else {
            val vehicle = Vehicle()
            vehicle.id = vehicleDTO.id
            vehicle.age = vehicleDTO.age
            vehicle.brand = vehicleDTO.brand
            vehicle.licenseNumber = vehicleDTO.licenseNumber
            vehicle.owner = vehicleDTO.owner
            return vehicle
        }
    }

    fun vehicleDTOsToVehicles(vehicleDTOs: List<VehicleDTO>): List<Vehicle?> {
        return vehicleDTOs
            .filter{ Objects.nonNull(it) }
            .map{ this.vehicleDTOToVehicle(it) }
    }

    fun vehicleFromId(id: Long?): Vehicle? {
        if (id == null) {
            return null
        }
        val vehicle = Vehicle()
        vehicle.id = (id)
        return vehicle
    }
}
