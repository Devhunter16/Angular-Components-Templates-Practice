import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
// Using the TS feature "implements" to force our class to use a certain interface,
// In this case the "OnInit" interface. By implementing this we are forced to use
// ngOnInit() correctly here in our class and it will complain if we do not. It
// protects us against typos
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  // Had to use the "any" type here to finally make the code work
  private interval: any;

  // Using the ngOnInit() method, a lifecycle hook that fires once after Angular
  // has initialized all the component's inputs. Used for anything you want to do
  // upon initialization
  ngOnInit() {
    // Using the built-in setInterval() function here to fire off a function every
    // 5000 milliseconds or 5 seconds
    this.interval = setInterval(() => { 
      const rnd = Math.random(); // Produces a value between 0.0 and 1.0
      // Randomly changes server status
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd > 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  };

  // Using this because we're setting an interval in ngOnInit() but we want to make
  // sure that when the component here closes that the interval doesn't keep going on
  // forever causing a memory leak. We're cleaning up here with ngOnDestroy() which
  //fires when the component closes
  ngOnDestroy() {
    // Stopping the interval with the built-in clearTimeout() method
    clearTimeout(this.interval);
  };
};
