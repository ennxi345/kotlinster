package thesis.web.rest

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import thesis.constants.Constant
import thesis.service.HeadquarterService
import thesis.service.dto.HeadquarterDTO
import javax.xml.ws.Response


@RestController
@RequestMapping(Constant.API_BASE_URL)
class HeadquarterResource(val service: HeadquarterService) {

    companion object {
        const val ENTITY_URL: String = "/headquarter"
    }


    @PostMapping(ENTITY_URL)
    fun create(@RequestBody iDTO: HeadquarterDTO){
        service.save(iDTO)
    }

    @PutMapping(ENTITY_URL)
    fun update(@RequestBody iDTO: HeadquarterDTO) {
        service.save(iDTO)
    }

    @GetMapping(ENTITY_URL + "/all")
    fun getAll(): ResponseEntity<List<HeadquarterDTO>> {
        return ResponseEntity.ok(service.getAll()) ;
    }

    @GetMapping(ENTITY_URL + "/{id}")
    fun getById(@PathVariable("id") id: Long): ResponseEntity<HeadquarterDTO> {
        return ResponseEntity.ok(service.getById(id)) ;
    }

    @DeleteMapping( ENTITY_URL + "/{id}")
    fun deleteById(@PathVariable ("id") id: Long) : ResponseEntity<Void> {
        service.deleteById(id)
        return ResponseEntity.ok().build()
    }
}
