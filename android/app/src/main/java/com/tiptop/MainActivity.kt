package com.tiptop
import android.os.Build
import android.os.Bundle
import android.graphics.Color
import androidx.core.view.WindowCompat
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  override fun getMainComponentName(): String = "TipTop"

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
      val window = window

      // ✅ Allow content to draw edge-to-edge (behind status/navigation bars)
      WindowCompat.setDecorFitsSystemWindows(window, false)

      // ✅ Let React Native fully control icon style and background
      window.statusBarColor = Color.TRANSPARENT
      window.navigationBarColor = Color.TRANSPARENT
      // ⛔ DO NOT set insetsController here if you want JS to control bar content color per screen
    }
  }

  override fun createReactActivityDelegate(): ReactActivityDelegate =
    DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
