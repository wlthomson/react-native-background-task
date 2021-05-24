package com.reactnativebackgroundtask;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AlarmManagerModule extends ReactContextBaseJavaModule {
    private final String TAG = "AlarmManagerModule";

    AlarmManagerModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public void setRepeating(String action, int intervalMillis) {
        Context context = getReactApplicationContext();

        AlarmManager alarmManager = (AlarmManager)context.getSystemService(Context.ALARM_SERVICE);

        Intent intent = new Intent();
        intent.setAction(action);

        PendingIntent pendingIntent = PendingIntent.getBroadcast(context, 0, intent, 0);

        alarmManager.setRepeating(AlarmManager.RTC_WAKEUP, System.currentTimeMillis(), intervalMillis, pendingIntent);
    }
}