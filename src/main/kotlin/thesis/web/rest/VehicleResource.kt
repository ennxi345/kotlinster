package thesis.web.rest

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import thesis.entities.Vehicle
import thesis.repository.VehicleRepository
import thesis.service.dto.VehicleDTO
import thesis.service.mapper.VehicleMapper
import java.net.URI


@RestController
@RequestMapping("/api")
class VehicleResource (val vehicleRepository: VehicleRepository){

    //A lateinit segítségével tudom autowired-é tenni a mapper-t
    @Autowired
    lateinit var vehicleMapper: VehicleMapper

    @PostMapping("/vehicle")
    fun createVehicle( @RequestBody vehicle: Vehicle) {
        if(vehicle.id == null){
            vehicleRepository.save(vehicle)
        }
    }


    @PostMapping("/vehicledto")
    fun createVehicleFromDto( @RequestBody vehicleDTO: VehicleDTO): ResponseEntity<VehicleDTO> {

        val headers = HttpHeaders()
        headers.add("X-agroKotlin-error", "error.idexist")
        headers.add("X-agroKotlin-params", "Vehicle")

        if(vehicleDTO.id != null){
            return ResponseEntity.badRequest().body(null)
        }
        var vehicle = vehicleMapper.convertToEntity(vehicleDTO)
        vehicleRepository.save(vehicle)

        return ResponseEntity.created(URI("/api/vehicledto/" + vehicleDTO.id))
            .headers(headers)
            .body<VehicleDTO>(vehicleDTO)
    }

    @GetMapping("/vehicle/all")
    fun getAll() =
        vehicleRepository.findAll()
}
