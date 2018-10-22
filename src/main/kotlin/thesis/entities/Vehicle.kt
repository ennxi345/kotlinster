package thesis.entities

import org.hibernate.annotations.Cache
import org.hibernate.annotations.CacheConcurrencyStrategy
import thesis.domain.AbstractAuditingEntity
import javax.persistence.*
import javax.validation.constraints.Size

@Entity
@Table(name = "vehicle")
class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    var id: Long? = null

    @Column(name = "license_number")
    var licenseNumber: Long? = null

    @Column(name = "age")
    var age: Int? = null

    @Size(max = 50)
    @Column(name = "brand", length = 50)
    var brand: String? = null

    @Size (max = 100)
    @Column (name = "owner", length = 100)
    var owner: String? = null


    companion object {

        private const val serialVersionUID = 1L
    }
}
