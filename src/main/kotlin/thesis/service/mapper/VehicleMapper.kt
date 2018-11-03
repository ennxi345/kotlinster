package thesis.service.mapper

import org.mapstruct.CollectionMappingStrategy
import org.mapstruct.Mapper
import org.springframework.beans.factory.annotation.Autowired
import thesis.domain.Authority
import thesis.entities.Vehicle
import thesis.repository.VehicleRepository
import thesis.service.dto.VehicleDTO
import java.util.*

@Mapper(componentModel = "spring",collectionMappingStrategy = CollectionMappingStrategy.ADDER_PREFERRED )
interface VehicleMapper {

     fun converToDto(vehicle: Vehicle) : VehicleDTO

     fun converToEntity(vehicleDto: VehicleDTO ) : Vehicle

}
