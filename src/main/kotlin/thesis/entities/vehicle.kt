package thesis.entities

import org.hibernate.annotations.Cache
import org.hibernate.annotations.CacheConcurrencyStrategy
import thesis.domain.AbstractAuditingEntity
import java.io.Serializable
import javax.persistence.*
import javax.validation.constraints.Size

/**
 * A Nveng.
 */
@Entity
@Table(name = "vehicle")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
class Vehicle : AbstractAuditingEntity(), Serializable {

    @Column(name = "license_number")
    var licenseNumber: Long? = null

    @Column(name = "age")
    var age: Int? = null

    @Column(name = "type")
    var vegzettsegId: Int? = null

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
