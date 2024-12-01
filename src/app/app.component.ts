import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  onBoolValue,
  onIntValue, onListBool, onListInt, onListLong, onListString, onListValue,
  onLongValue,
  onStringValue,
  onTestError,
  onTriggerBroadcast,
  onValueObject
} from '../assets';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ioGameSdkTsExampleAngular';
  protected readonly onIntValue = onIntValue;
  protected readonly onTriggerBroadcast = onTriggerBroadcast;
  protected readonly onTestError = onTestError;
  protected readonly onLongValue = onLongValue;
  protected readonly onBoolValue = onBoolValue;
  protected readonly onStringValue = onStringValue;
  protected readonly onValueObject = onValueObject;
  protected readonly onListInt = onListInt;
  protected readonly onListLong = onListLong;
  protected readonly onListBool = onListBool;
  protected readonly onListString = onListString;
  protected readonly onListValue = onListValue;
}
