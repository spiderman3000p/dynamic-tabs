import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
} from '@angular/core';
import { MenuItem } from '../components/my-tabs/my-tabs.component';

@Injectable()
export class DynamicComponentService {
  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  addComponent(component: MenuItem) {
    if (!component.componentType) {
      throw new Error('The component to show must have a valid type');
    }
    if (!this.isValidTag(component.tag)) {
      throw new Error('The component to show must have a valid tag');
    }
    if (!this.isValidHtmlId(component.htmlId)) {
      throw new Error('The component to show must have a valid html id');
    }
    // Create element
    const element = document.createElement(component.tag!);
    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      component.componentType!
    );
    const componentRef = factory.create(this.injector, [], element);
    component.componentRef = componentRef;
    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(componentRef.hostView);

    // Listen to the close event
    /*componentRef.instance.closed.subscribe(() => {
      document.body.removeChild(element);
      this.applicationRef.detachView(componentRef.hostView);
    });*/

    // Set the message
    //popupComponentRef.instance.message = message;

    // Add to the DOM
    setTimeout(() => {
      document.querySelector('#' + component.htmlId!)!.appendChild(element);
    }, 200);
  }

  removeComponent(component: MenuItem) {
    document.querySelector('#' + component.htmlId!)?.remove();
    this.applicationRef.detachView(component!.componentRef!.hostView);
  }

  isValidTag(tag?: string) {
    return tag != null && tag != undefined;
  }

  isValidHtmlId(id?: string) {
    return id != null && id != undefined;
  }
}
