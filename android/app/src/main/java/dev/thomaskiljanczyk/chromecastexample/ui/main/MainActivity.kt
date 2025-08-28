package dev.thomaskiljanczyk.chromecastexample.ui.main

import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.fragment.app.FragmentActivity
import dagger.hilt.android.AndroidEntryPoint
import dev.thomaskiljanczyk.chromecastexample.ui.theme.ChromecastExampleTheme

@AndroidEntryPoint
class MainActivity : FragmentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        enableEdgeToEdge()
        
        setContent {
            ChromecastExampleTheme {
                MainScreen()
            }
        }
    }
}
