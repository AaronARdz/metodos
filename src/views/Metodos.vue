<template>
   <div>
     <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="../assets/dist/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">Métodos Númericos</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../assets/dist/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Aaron Acosta</a>
        </div>
      </div>

     <!-- Sidebar Menu -->
      <nav class="mt-2">
         <p class="nav-link text-white">Unidad 1</p>
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link" @click="inter = !inter" :class="{active : inter}">
              <i class="nav-icon fas fa-calculator"></i>
              <p>
                Interpolación
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview" v-if="inter">
              <li class="nav-item">
                <router-link to="/interpolacionlineal" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Interpolación Lineal </p>
                </router-link>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Newton hacia adelante</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Newton hacia atrás</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>N. diferencias divididas</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Lagrange</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link" @click="nolineal = !nolineal" :class="{active : nolineal}">
              <i class="nav-icon fas fa-calculator"></i>
              <p>
                Ecuaciones no lineales
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview" v-if="nolineal">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Gráfico</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Bisectriz</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Punto fijo</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Newton Raphson</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Falsa posición</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <p class="nav-link text-white">Unidad 2</p>
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link" @click="lineal = !lineal" :class="{active : lineal}">
              <i class="nav-icon fas fa-calculator"></i>
              <p>
                Ecuaciones lineales
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview" v-if="lineal">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Montante</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Gauss-Jordan</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Eliminacion Gaussiana</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Gauss-Seidel</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Jacobi</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link" @click="cuadrados = !cuadrados" :class="{active : cuadrados}">
              <i class="nav-icon fas fa-calculator"></i>
              <p>
                Mínimos Cuadrados
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview" v-if="cuadrados">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Linea Recta</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Cuadrática</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Cúbica</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Lineal con función</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Cuadrática con función</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <p class="nav-link text-white">Unidad 3</p>
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link" @click="integracion = !integracion" :class="{active : integracion}">
              <i class="nav-icon fas fa-calculator"></i>
              <p>
                Integración
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview" v-if="integracion">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Regla Trapezoidal</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Newton-Cotes Cerradas</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Newton-Cotes Abiertas</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>1/3 de Simpson</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>3/4 de Simpson</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <p class="nav-link text-white">Unidad 4</p>
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link" @click="diferenciales = !diferenciales" :class="{active : diferenciales}">
              <i class="nav-icon fas fa-calculator"></i>
              <p>
                Ec. diferenciales
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview" v-if="diferenciales">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Euler</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Euler hacia adelante</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Euler hacia atrás</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Euler modificado</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Runge-Kutta 2do orden</p>
                </a>
              </li>
               <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Runge-Kutta 3er orden</p>
                </a>
              </li>
               <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>Runge-Kutta 4to orden</p>
                </a>
              </li>
               <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>R-K 1/3 de Simpson</p>
                </a>
              </li>
               <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>R-K 3/8 de Simpson</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-angle-right nav-icon"></i>
                  <p>R-K Orden Superior</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
    </ul>

  </nav>
  <!-- /.navbar -->
  
   </div>
  <!-- Navbar -->
  
</template>

<script>
import '../assets/dist/dist/js/adminlte.min.js';
import '../assets/dist/plugins/jquery/jquery.min.js';
import '../assets/dist/plugins/bootstrap/js/bootstrap.bundle.min.js';
import $ from 'jquery'

export default {
    data() {
      return {
        inter: false,
        nolineal: false,
        lineal: false,
        cuadrados: false,
        integracion: false,
        diferenciales: false
      }
    }
}
</script>