package logic;

import java.util.Date;

public class DataSessionBean {
    private int x;
    private int y;
    private int zoom;
    private boolean inBatman;
    private Date currentTime;
    private long processTime;

    public DataSessionBean() {
        this.x = 0;
        this.y = 0;
        this.zoom = 10;
        this.inBatman = true;
        this.currentTime = new Date();
        this.processTime = 0;
    }

    public void setX(int x) {
        this.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }

    public void setZoom(int zoom) {
        this.zoom = zoom;
    }

    public void setInBatman(boolean inBatman) {
        this.inBatman = inBatman;
    }

    public void setCurrentTime(Date currentTime) {
        this.currentTime = currentTime;
    }

    public void setProcessTime(long processTime) {
        this.processTime = processTime;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public int getZoom() {
        return zoom;
    }

    public boolean isInBatman() {
        return inBatman;
    }

    public Date getCurrentTime() {
        return currentTime;
    }

    public long getProcessTime() {
        return processTime;
    }
}
