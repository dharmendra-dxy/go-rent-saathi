import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { CreateOrganizationForm } from "../forms/create-organization-form";

const CreateOrganizationButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Organization</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Organization</DialogTitle>
          <DialogDescription>
            Create a new organization to get started.
          </DialogDescription>
        </DialogHeader>
        <CreateOrganizationForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrganizationButton;
