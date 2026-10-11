import { mount } from 'svelte';
import 'harper-editor/style.css';
import './fonts.css';
import App from './App.svelte';

mount(App, { target: document.getElementById('app') });
