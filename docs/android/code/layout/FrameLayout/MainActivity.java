package com.cqy.framelayout;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.widget.TextView;

import java.lang.ref.WeakReference;
import java.util.Timer;
import java.util.TimerTask;

public class MainActivity extends AppCompatActivity {

    private int[] names = new int[]{R.id.box_1, R.id.box_2, R.id.box_3, R.id.box_4, R.id.box_5,
            R.id.box_6, R.id.box_7, R.id.box_8,};

    private TextView[] views = new TextView[names.length];


    class MyHandler extends Handler {
        private WeakReference<MainActivity> activity;

        public MyHandler(WeakReference<MainActivity> activity) {
            this.activity = activity;
        }

        private int currentColor = 0;

        private int[] colors = new int[]{R.color.color1, R.color.color2, R.color.color3, R.color.color4
                , R.color.color5, R.color.color6, R.color.color7, R.color.color8,};

        @Override
        public void handleMessage(@NonNull Message msg) {
            if (msg.what == 0x123) {
                for (int i = 0, len = activity.get().names.length; i < len; i++) {
                    activity.get().views[i]
                            .setBackgroundResource(colors[(i + currentColor) % colors.length]);
                }
                currentColor++;
            }
            super.handleMessage(msg);
        }
    }

    private Handler handler = new MyHandler(new WeakReference<MainActivity>(this));

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        for (int i = 0; i < names.length; i++) {
            views[i] = findViewById(names[i]);
        }

        new Timer().schedule(new TimerTask() {
            @Override
            public void run() {
                handler.sendEmptyMessage(0x123);
            }
        }, 0, 200);
    }
}
