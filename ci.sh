#!/bin/bash

# Script to update the appVersion field in Chart.yaml
if [ -z "$1" ]
then
  echo input variable for tag is required
  exit 1
else
  sed -i "s/^appVersion: .*$/appVersion: $1/"  helm/vue-nginx/Chart.yaml
fi