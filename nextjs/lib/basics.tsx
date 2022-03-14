import { Category } from '../types/category';
import { BasicCategory } from './categories/basic';
import { CICategory } from './categories/ci';
import { CSSCategory } from './categories/css';
import { FirebaseCategory } from './categories/firebase';
import { HtmlCategory } from './categories/html';
import { JavaScriptCategory } from './categories/javascript';
import { NextJSCategory } from './categories/nextjs';
import { ReactCategory } from './categories/react';
import { TypeScriptCategory } from './categories/typescript';
import { VSCodeCategory } from './categories/vscode';

export const BASICS: Category[] = [
  BasicCategory,
  VSCodeCategory,
  CICategory,
  HtmlCategory,
  JavaScriptCategory,
  TypeScriptCategory,
  CSSCategory,
  ReactCategory,
  NextJSCategory,
  FirebaseCategory,
];
