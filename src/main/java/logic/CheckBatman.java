package logic;


import entity.Point;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

import static java.lang.Math.abs;
import static java.lang.Math.sqrt;

public class CheckBatman {
    private final long start;
    private double getX;
    private double getY;
    private double getZoom;

    public CheckBatman(int getX, int getY, int getZoom) {
        this.start = System.nanoTime();
        this.getX = getX * 7;
        this.getY = getY * 7;
        this.getZoom = getZoom;
    }


    public boolean check() {
        if (getX >= 0 && getY >= 0) {
            return inFirstQuarter();
        } else {
            if (getX <= 0 && getY >= 0) {
                return inSecondQuarter();
            } else {
                if (getX <= 0) {
                    return inThirdQuarter();
                } else {
                    return inFourthQuarter();
                }
            }
        }
    }


    private boolean inFirstQuarter() {
        if (getZoom + 1 <= getX && getZoom > getX) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = 9 - 8 * absX;
            return getY <= y * getZoom;
        }

        if (getX >= getZoom + 1 && getX < 3 * getZoom + 1) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = (2.71052 + 1.5 - 0.5 * absX - 1.35526 * sqrt(4 - (absX - 1) * (absX - 1)));
            return getY <= y * getZoom;
        }

        if (getX >= 3 * getZoom + 1 && getX < 7 * getZoom + 1) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = 1.5 * sqrt((-abs(absX - 1)) * abs(3 - absX) / ((absX - 1) * (3 - absX))) * (1 + abs(absX - 3) /
                    (absX - 3)) * sqrt(1 - (x / 7) * (x / 7)) + (4.5 + 0.75 * (abs(x - 0.5) + abs(x + 0.5)) - 2.75 *
                    (abs(x - 0.75) + abs(x + 0.75))) * (1 + abs(1 - absX) / (1 - absX));
            return getY <= y * getZoom;
        }

        if (getX <= getZoom && getX > 0.5 * getZoom) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = 1.6 * absX + 1.4;
            return y * getZoom >= getY;
        }

        if (getX <= 0.5 * getZoom && getX >= 0) {
            double y = 2.25;
            return y * getZoom >= getY;
        }
        return false;
    }


    private boolean inSecondQuarter() {
        if (getX >= -7 * getZoom && getX < -3 * getZoom - 1) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = 1.5 * sqrt((-abs(absX - 1)) * abs(3 - absX) / ((absX - 1) * (3 - absX))) * (1 + abs(absX - 3) /
                    (absX - 3)) * sqrt(1 - (x / 7) * (x / 7)) + (4.5 + 0.75 * (abs(x - 0.5) + abs(x + 0.5)) - 2.75 *
                    (abs(x - 0.75) + abs(x + 0.75))) * (1 + abs(1 - absX) / (1 - absX));
            return getY <= y * getZoom;
        }

        if (getX >= -3 * getZoom && getX < -1 * getZoom - 1) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = (2.71052 + 1.5 - 0.5 * absX - 1.35526 * sqrt(4 - (absX - 1) * (absX - 1)));
            return getY <= y * getZoom;
        }

        if (-1 * getZoom - 1 >= getX && -1 * getZoom < getX) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = 9 - 8 * absX;
            return getY <= y * getZoom;
        }

        if (getX >= -1 * getZoom && getX < -0.5 * getZoom) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = 1.6 * absX + 1.4;
            return y * getZoom >= getY;
        }

        if (getX >= -0.5 * getZoom && getX <= 0) {
            double y = 2.25;
            return y * getZoom >= getY;
        }
        return false;
    }


    private boolean inThirdQuarter() {
        if (getX <= -4 * getZoom - 1 && getX > -7 * getZoom - 1) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = (-3) * sqrt(1 - (x / 7) * (x / 7)) * sqrt(abs(absX - 4) / (absX - 4));
            return getY >= y * getZoom;

        }

        if (getX >= -4 * getZoom && getX <= 0) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = abs(x / 2) - 0.0913722 * x * x - 3 + sqrt(1 - (abs(absX - 2) - 1) * (abs(absX - 2) - 1));
            return getY >= y * getZoom;
        }
        return false;
    }


    private boolean inFourthQuarter() {
        if (getX > 4 * getZoom && getX <= 7 * getZoom) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = (-3) * sqrt(1 - (x / 7) * (x / 7)) * sqrt(abs(absX - 4) / (absX - 4));
            return getY >= y * getZoom;
        }

        if (getX >= 0 && getX <= 4 * getZoom) {
            double x = getX / getZoom;
            double absX = abs(x);
            double y = abs(x / 2) - 0.0913722 * x * x - 3 + sqrt(1 - (abs(absX - 2) - 1) * (abs(absX - 2) - 1));
            return getY >= y * getZoom;
        }
        return false;
    }

    public Point updateRequest() {
        Point point = new Point();
        point.setX(getX / 7);
        point.setY(getY / 7);
        point.setZoom(getZoom);
        point.setInBatman(check());
        point.setCurrentTime(new Date());
        point.setProcessTime(System.nanoTime() - start);
        return point;
    }
}
