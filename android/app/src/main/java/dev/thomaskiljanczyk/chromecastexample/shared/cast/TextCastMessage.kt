package dev.thomaskiljanczyk.chromecastexample.shared.cast

import kotlinx.serialization.Serializable

@Serializable
data class TextCastMessage(val text: String)