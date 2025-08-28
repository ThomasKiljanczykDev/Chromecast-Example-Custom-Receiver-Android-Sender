package dev.thomaskiljanczyk.chromecastexample.shared.cast

import dev.thomaskiljanczyk.chromecastexample.enums.MoveAction
import kotlinx.serialization.Serializable

@Serializable
data class MoveCastMessage(val action: MoveAction)