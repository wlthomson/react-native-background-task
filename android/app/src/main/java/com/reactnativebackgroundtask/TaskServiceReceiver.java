package com.reactnativebackgroundtask;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.HeadlessJsTaskService;

public class TaskServiceReceiver extends BroadcastReceiver {
    private static final String TAG = "TaskServiceReceiver";

    @Override
    public void onReceive(Context context, Intent intent) {
        Intent service = new Intent(context, TaskService.class);
        Bundle bundle = new Bundle();

        bundle.putString("url", "https://api.thecatapi.com/v1/images/search");
        service.putExtras(bundle);

        context.startService(service);

        HeadlessJsTaskService.acquireWakeLockNow(context);
    }
}
