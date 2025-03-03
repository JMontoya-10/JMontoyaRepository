package com.example.specialist_contacts

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.specialist_contacts.adapter.ProfessionalAdapter
import com.example.specialist_contacts.model.Professional

class MainActivity : AppCompatActivity() {

    private lateinit var recyclerView: RecyclerView
    private lateinit var adapter: ProfessionalAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Inicializar RecyclerView
        recyclerView = findViewById(R.id.recyclerView)
        recyclerView.layoutManager = LinearLayoutManager(this)

        // Crear lista de profesionales
        val professionals = createProfessionalsList()

        // Configurar el adaptador
        adapter = ProfessionalAdapter(professionals) { professional ->
            // Al hacer clic en un profesional, abrir DetailsActivity
            val intent = Intent(this, DetailsActivity::class.java).apply {
                putExtra("PROFESSIONAL_ID", professional.id)
            }
            startActivity(intent)
        }

        recyclerView.adapter = adapter
    }

    private fun createProfessionalsList(): List<Professional> {
        return listOf(
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
                name = "Lic. Mario Fuentes",
                profession = "Abogado",
                experience = 8,
                rating = 4.8f,
                about = "Abogado especialista en derecho civil y mercantil. Experiencia en resolución de conflictos, negociación y litigación. Servicios de asesoría legal a particulares y empresas.",
                email = "mario.fuentes@gmail.com",
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
                email = "david.herrera@gmail.com",
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
                email = "alejandro.ruiz@gmail.com",
                phone = "+34645678901",
                imageResource = R.drawable.economista
            ),
            Professional(
                id = 5,
                name = "Lic. Luis Vega",
                profession = "Comentarista",
                experience = 7,
                rating = 4.5f,
                about = "Periodista y comentarista especializado en actualidad política y social. Amplia experiencia en medios de comunicación, análisis de noticias y contenido editorial. Servicios de asesoría en comunicación.",
                email = "luis.vega@gmail.com",
                phone = "+34656789012",
                imageResource = R.drawable.comentarista
            )
        )
    }
}