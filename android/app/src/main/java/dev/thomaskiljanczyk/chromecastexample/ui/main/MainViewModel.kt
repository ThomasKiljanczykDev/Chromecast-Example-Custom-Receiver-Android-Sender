package dev.thomaskiljanczyk.chromecastexample.ui.main

import androidx.lifecycle.ViewModel
import com.google.android.gms.cast.framework.CastContext
import com.google.android.gms.cast.framework.CastSession
import dagger.hilt.android.lifecycle.HiltViewModel
import dev.thomaskiljanczyk.chromecastexample.constants.CastConstants
import dev.thomaskiljanczyk.chromecastexample.enums.MoveAction
import dev.thomaskiljanczyk.chromecastexample.shared.cast.MoveCastMessage
import dev.thomaskiljanczyk.chromecastexample.shared.cast.TextCastMessage
import kotlinx.serialization.json.Json
import javax.inject.Inject

@HiltViewModel
class MainViewModel @Inject constructor(
    private val castContext: CastContext
) : ViewModel() {
    fun sendTitleCommand(text: String): Boolean {
        val session: CastSession = castContext.sessionManager.currentCastSession ?: return false

        val messageJson = Json.encodeToString(TextCastMessage(text))
        session.sendMessage(CastConstants.TITLE_NAMESPACE, messageJson)
        return true
    }

    fun sendMoveActionCommand(moveAction: MoveAction): Boolean {
        val session: CastSession = castContext.sessionManager.currentCastSession ?: return false

        val messageJson = Json.encodeToString(MoveCastMessage(moveAction))
        session.sendMessage(CastConstants.MOVE_NAMESPACE, messageJson)
        return true
    }
}