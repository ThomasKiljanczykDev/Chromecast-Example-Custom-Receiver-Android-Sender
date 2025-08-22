package pl.gunock.chromecastexample.ui.main

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.tooling.preview.PreviewLightDark
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import kotlinx.coroutines.launch
import pl.gunock.chromecastexample.R
import pl.gunock.chromecastexample.enums.MoveAction
import pl.gunock.chromecastexample.ui.theme.ChromecastExampleTheme

@Composable
fun MainScreen(
    viewModel: MainViewModel = viewModel()
) {
    val snackbarHostState = remember { SnackbarHostState() }
    val scope = rememberCoroutineScope()
    val noSessionMessage = stringResource(R.string.chromecast_toast_no_session)

    Scaffold(
        snackbarHost = { SnackbarHost(hostState = snackbarHostState) }
    ) { paddingValues ->
        MainScreen(
            onSendTitle = { title ->
                if (!viewModel.sendTitleCommand(title)) {
                    scope.launch {
                        snackbarHostState.showSnackbar(noSessionMessage)
                    }
                }
            },
            onSendMoveAction = { action ->
                if (!viewModel.sendMoveActionCommand(action)) {
                    scope.launch {
                        snackbarHostState.showSnackbar(noSessionMessage)
                    }
                }
            },
            modifier = Modifier.padding(paddingValues)
        )
    }
}

@Composable
private fun MainScreen(
    onSendTitle: (String) -> Unit,
    onSendMoveAction: (MoveAction) -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        TitleCommandRow(
            onSendTitle = onSendTitle,
            modifier = Modifier.fillMaxWidth()
        )
        Spacer(modifier = Modifier.height(20.dp))
        CommandButtonPanel(
            onSendMoveAction = onSendMoveAction
        )
    }
}

@PreviewLightDark
@Composable
fun MainScreenPreview() {
    ChromecastExampleTheme {
        Surface {
            MainScreen(
                onSendTitle = {},
                onSendMoveAction = {}
            )
        }
    }
}

@Composable
private fun TitleCommandRow(
    onSendTitle: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    var text by rememberSaveable { mutableStateOf("") }
    val sendButtonDescription = stringResource(R.string.main_activity_button_send)

    Row(
        modifier = modifier,
        horizontalArrangement = Arrangement.Center,
        verticalAlignment = Alignment.CenterVertically
    ) {
        TextField(
            value = text,
            onValueChange = { text = it },
            placeholder = {
                Text(text = stringResource(id = R.string.main_activity_text_input_hint))
            },
            modifier = Modifier.weight(1f),
            singleLine = true
        )
        Spacer(modifier = Modifier.width(8.dp))
        Button(
            onClick = { onSendTitle(text) },
            modifier = Modifier.semantics {
                contentDescription = sendButtonDescription
            }
        ) {
            Text(text = sendButtonDescription)
        }
    }
}

@Composable
private fun CommandButtonPanel(
    onSendMoveAction: (MoveAction) -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            DirectionalButton(
                direction = MoveAction.UP,
                onClick = { onSendMoveAction(MoveAction.UP) }
            )

            Spacer(modifier = Modifier.height(8.dp))

            Row(
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                DirectionalButton(
                    direction = MoveAction.LEFT,
                    onClick = { onSendMoveAction(MoveAction.LEFT) }
                )
                Spacer(modifier = Modifier.width(20.dp))
                DirectionalButton(
                    direction = MoveAction.RIGHT,
                    onClick = { onSendMoveAction(MoveAction.RIGHT) }
                )
            }

            Spacer(modifier = Modifier.height(8.dp))

            DirectionalButton(
                direction = MoveAction.DOWN,
                onClick = { onSendMoveAction(MoveAction.DOWN) }
            )
        }
    }
}

@Composable
private fun DirectionalButton(
    direction: MoveAction,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val buttonText = when (direction) {
        MoveAction.UP -> stringResource(R.string.main_activity_button_up)
        MoveAction.DOWN -> stringResource(R.string.main_activity_button_down)
        MoveAction.LEFT -> stringResource(R.string.main_activity_button_left)
        MoveAction.RIGHT -> stringResource(R.string.main_activity_button_right)
    }

    Button(
        onClick = onClick,
        modifier = modifier
            .width(90.dp)
            .semantics {
                contentDescription = buttonText
            }
    ) {
        Text(text = buttonText)
    }
}