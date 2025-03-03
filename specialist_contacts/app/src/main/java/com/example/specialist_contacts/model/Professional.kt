package com.example.specialist_contacts.model

data class Professional (
    val id: Int,
    val name: String,
    val profession: String,
    val experience: Int,
    val rating: Float,
    val about: String,
    val email: String,
    val phone: String,
    val imageResource: Int
)