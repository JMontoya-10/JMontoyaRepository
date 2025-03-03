package com.example.specialist_contacts.adapter

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.cardview.widget.CardView
import androidx.recyclerview.widget.RecyclerView
import com.example.specialist_contacts.R
import com.example.specialist_contacts.model.Professional

class ProfessionalAdapter(
    private val professionals: List<Professional>,
    private val onItemClick: (Professional) -> Unit
) : RecyclerView.Adapter<ProfessionalAdapter.ProfessionalViewHolder>() {

    class ProfessionalViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val cardView: CardView = view.findViewById(R.id.cardView)
        val imageView: ImageView = view.findViewById(R.id.imgDoctor)
        val nameTextView: TextView = view.findViewById(R.id.txtName)
        val professionTextView: TextView = view.findViewById(R.id.txtSpecialty)
        val experienceTextView: TextView = view.findViewById(R.id.txtExperience)
        val ratingTextView: TextView = view.findViewById(R.id.txtRating)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ProfessionalViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_professional, parent, false)
        return ProfessionalViewHolder(view)
    }

    override fun onBindViewHolder(holder: ProfessionalViewHolder, position: Int) {
        val professional = professionals[position]


        holder.imageView.setImageResource(professional.imageResource)
        holder.nameTextView.text = professional.name
        holder.professionTextView.text = professional.profession
        holder.experienceTextView.text = "${professional.experience} años"
        holder.ratingTextView.text = professional.rating.toString()

        holder.cardView.setOnClickListener {
            onItemClick(professional)
        }
    }

    override fun getItemCount() = professionals.size
}