package dev.thomaskiljanczyk.chromecastexample.ui.shared

import android.view.ContextThemeWrapper
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.mediarouter.app.MediaRouteButton
import com.google.android.gms.cast.framework.CastButtonFactory
import dev.thomaskiljanczyk.chromecastexample.cast.CustomMediaRouteDialogFactory

@Composable
fun CastButton(
    modifier: Modifier = Modifier,
    size: Dp = 48.dp
) {
    val context = LocalContext.current
    
    val castButton = remember {
        MediaRouteButton(ContextThemeWrapper(context, com.google.android.material.R.style.Theme_MaterialComponents)).apply {
            CastButtonFactory.setUpMediaRouteButton(context.applicationContext, this)
            dialogFactory = CustomMediaRouteDialogFactory()
        }
    }
    
    Box(
        modifier = modifier.size(size),
        contentAlignment = Alignment.Center
    ) {
        AndroidView(
            factory = { castButton },
            update = { }
        )
    }
}