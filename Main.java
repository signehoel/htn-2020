import java.util.*;
import java.util.Scanner;
import java.lang.*;
import java.lang.Math.*;
class Main {
  public static void main(String args[]){  //TODO Auto-generated method stub
          Scanner in = new Scanner(System.in);
          double m; 
          double yt;
          double y2; 
          double y1; 
          double xt; 
          double x2; 
          double x1; 

        System.out.println("Enter the y2 coordinate value"); 
        y2 = in.nextInt(); 
        System.out.println("Enter the y1 coordinate value"); 
        y1 = in.nextInt(); 

        System.out.println("Enter the x2 coordinate value"); 
        x2 = in.nextInt(); 
        System.out.println("Enter the x1 coordinate value"); 
        x1 = in.nextInt(); 

          yt = y2 - y1; 
          xt = x2 - x1; 
          m = yt/xt; 
          
        System.out.println("slope (m) = "+Math.round(m)); 
    }
}