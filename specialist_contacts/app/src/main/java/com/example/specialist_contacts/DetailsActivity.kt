package com.example.specialist_contacts

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.example.specialist_contacts.model.Professional

class DetailsActivity : AppCompatActivity() {

    private lateinit var imgDoctor: ImageView
    private lateinit var txtName: TextView
    private lateinit var txtProfession: TextView
    private lateinit var txtAbout: TextView
    private lateinit var txtEmail: TextView
    private lateinit var txtPhone: TextView
    private lateinit var btnCall: Button
    private lateinit var btnWhatsapp: Button
    private lateinit var btnBack: Button

    private var phoneNumber: String = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_details)

        // Inicializando vistas
        imgDoctor = findViewById(R.id.imgDoctor)
        txtName = findViewById(R.id.txtName)
        txtProfession = findViewById(R.id.txtProfession)
        txtAbout = findViewById(R.id.txtAbout)
        txtEmail = findViewById(R.id.txtEmail)
        txtPhone = findViewById(R.id.txtPhone)
        btnCall = findViewById(R.id.btnCall)
        btnWhatsapp = findViewById(R.id.btnWhatsapp)
        btnBack = findViewById(R.id.btnBack)


        btnBack.setOnClickListener {
            finish()
        }

        val professionalId = intent.getIntExtra("PROFESSIONAL_ID", -1)

        if (professionalId != -1) {
            val professional = getProfessionalById(professionalId)
            professional?.let {
                displayProfessionalDetails(it)
                setupButtons(it.phone)
            }
        }
    }

    private fun displayProfessionalDetails(professional: Professional) {
        imgDoctor.setImageResource(professional.imageResource)
        txtName.text = professional.name
        txtProfession.text = professional.profession
        txtAbout.text = professional.about
        txtEmail.text = professional.email
        txtPhone.text = professional.phone

        phoneNumber = professional.phone
    }

    private fun setupButtons(phone: String) {
        // Botón para llamadas
        btnCall.setOnClickListener {
            val callIntent = Intent(Intent.ACTION_DIAL)
            callIntent.data = Uri.parse("tel:$phone")
            startActivity(callIntent)
        }

        // Botón para msj de WhatsApp
        btnWhatsapp.setOnClickListener {
            val formattedPhone = phone.replace(" ", "").replace("+", "")
            try {
                val whatsappIntent = Intent(Intent.ACTION_VIEW)
                whatsappIntent.data = Uri.parse("https://api.whatsapp.com/send?phone=$formattedPhone")
                startActivity(whatsappIntent)
            } catch (e: Exception) {
                // En caso de que WhatsApp no esté instalado
                val intent = Intent(Intent.ACTION_VIEW)
                intent.data = Uri.parse("https://play.google.com/store/apps/details?id=com.whatsapp")
                startActivity(intent)
            }
        }
    }

    private fun getProfessionalById(id: Int): Professional? {
        val professionals = listOf(
            Professional(
                id = 1,
                name = "Dr. Carlos Mendoza",
                profession = "Médico General",
                experience = 12,
                rating = 4.9f,
                about = "Médico general con amplia experiencia en atención primaria, especializado en medicina preventiva y tratamiento de enfermedades crónicas. Enfoque en la salud integral y el bienestar de sus pacientes.",
                email = "carlos.mendoza@example.com",
                phone = "+34612345678",
                imageResource = R.drawable.doctor
            ),
            Professional(
                id = 2,
                name = "Lic. María Fuentes",
                profession = "Abogada",
                experience = 8,
                rating = 4.8f,
                about = "Abogada especialista en derecho civil y mercantil. Experiencia en resolución de conflictos, negociación y litigación. Servicios de asesoría legal a particulares y empresas.",
                email = "maria.fuentes@example.com",
                phone = "+34623456789",
                imageResource = R.drawable.abogado
            ),
            Professional(
                id = 3,
                name = "Ing. David Herrera",
                profession = "Programador",
                experience = 6,
                rating = 4.7f,
                about = "Ingeniero de software especializado en desarrollo web y aplicaciones móviles. Experiencia en múltiples lenguajes de programación y metodologías ágiles. Soluciones personalizadas para cada proyecto.",
                email = "david.herrera@example.com",
                phone = "+34634567890",
                imageResource = R.drawable.programador
            ),
            Professional(
                id = 4,
                name = "Lic. Alejandro Ruiz",
                profession = "Economista",
                experience = 10,
                rating = 4.6f,
                about = "Economista con especialización en finanzas corporativas y análisis de mercados. Servicios de consultoría financiera, planificación estratégica y gestión de inversiones para empresas y particulares.",
                email = "alejandro.ruiz@example.com",
                phone = "+34645678901",
                imageResource = R.drawable.economista
            ),
            Professional(
                id = 5,
                name = "Lic. Laura Vega",
                profession = "Comentarista",
                experience = 7,
                rating = 4.5f,
                about = "Periodista y comentarista especializada en actualidad política y social. Amplia experiencia en medios de comunicación, análisis de noticias y contenido editorial. Servicios de asesoría en comunicación.",
                email = "laura.vega@example.com",
                phone = "+34656789012",
                imageResource = R.drawable.comentarista
            )
        )

        return professionals.find { it.id == id }
    }
}