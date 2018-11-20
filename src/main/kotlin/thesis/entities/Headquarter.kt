package thesis.entities

import javax.persistence.*

@Entity
@Table(name = "headquarter")
data class Headquarter(
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    var id: Long?,
    @ManyToOne(fetch = FetchType.LAZY)
    var countyId: County?,
    @Column(name = "settlement", length = 100)
    var settlement: String?,
    @Column(name = "zip_code",length = 20)
    var zipCode: String?,
    @Column(name = "address",length = 200)
    var address: String?,
    @Column(name = "phone_number",length = 50)
    var phoneNumber: String?,
    @Column(name = "email",length = 100)
    var email: String?) {

    constructor() : this(null, null, null, null, null, null, null)

}
