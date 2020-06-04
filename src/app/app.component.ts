import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-basic";
  innerHeight = window.innerHeight;

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    console.log(event.target.innerWidth);
    this.innerHeight = event.target.innerWidth;
  }
}
